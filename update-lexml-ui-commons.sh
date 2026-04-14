#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEFAULT_UI_COMMONS_DIR="$SCRIPT_DIR/../lexml-ui-commons"
UI_COMMONS_DIR="${UI_COMMONS_PATH:-$DEFAULT_UI_COMMONS_DIR}"
PARECER_UI_COMMONS_DIR="$SCRIPT_DIR/ui-commons"
PARECER_PACKAGE_JSON="$SCRIPT_DIR/package.json"
UI_COMMONS_DEP_PACKAGE="@lexml/lexml-ui-commons"
SNAPSHOT_TS="$(date +%Y%m%d%H%M%S)"
UI_COMMONS_PACKAGE_NAME=""
UI_COMMONS_TGZ_NAME=""
UI_COMMONS_ORIGINAL_VERSION=""
UI_COMMONS_SNAPSHOT_VERSION=""
UI_COMMONS_VERSION_WAS_UPDATED="false"

restore_ui_commons_version() {
  if [[ "$UI_COMMONS_VERSION_WAS_UPDATED" == "true" && -n "$UI_COMMONS_ORIGINAL_VERSION" ]]; then
    cd "$UI_COMMONS_DIR"
    npm version "$UI_COMMONS_ORIGINAL_VERSION" --no-git-tag-version >/dev/null
    echo "     Versao restaurada no UI Commons: $UI_COMMONS_ORIGINAL_VERSION"
  fi
}

trap restore_ui_commons_version EXIT

echo "==> [1/5] Entrando no lexml-ui-commons"
if [[ ! -d "$UI_COMMONS_DIR" ]]; then
  echo "ALERTA: caminho do UI Commons nao foi encontrado: $UI_COMMONS_DIR"
  echo "Defina UI_COMMONS_PATH com um caminho valido ou ajuste o caminho padrao no script."
  exit 1
fi

cd "$UI_COMMONS_DIR"
UI_COMMONS_PACKAGE_NAME="$(node -p "require('./package.json').name")"
UI_COMMONS_ORIGINAL_VERSION="$(node -p "require('./package.json').version")"
UI_COMMONS_BASE_VERSION="${UI_COMMONS_ORIGINAL_VERSION%%-*}"
UI_COMMONS_SNAPSHOT_VERSION="${UI_COMMONS_BASE_VERSION}-dev.${SNAPSHOT_TS}"

echo "==> [2/5] Atualizando versao snapshot no UI Commons"
if [[ "$UI_COMMONS_ORIGINAL_VERSION" != "$UI_COMMONS_SNAPSHOT_VERSION" ]]; then
  npm version "$UI_COMMONS_SNAPSHOT_VERSION" --no-git-tag-version >/dev/null
  UI_COMMONS_VERSION_WAS_UPDATED="true"
fi
echo "     Pacote: $UI_COMMONS_PACKAGE_NAME"
echo "     Versao snapshot no UI Commons: $UI_COMMONS_SNAPSHOT_VERSION"

echo "==> [3/5] Gerando dist (npm run prepublish)"
npm run prepublish

echo "==> [4/5] Gerando pacote tgz snapshot (npm pack)"
UI_PACK_OUTPUT="$(npm pack)"
UI_COMMONS_TGZ_NAME="$(echo "$UI_PACK_OUTPUT" | tail -n 1 | tr -d '\r')"

if [[ -z "$UI_COMMONS_TGZ_NAME" || ! -f "$UI_COMMONS_TGZ_NAME" ]]; then
  echo "ALERTA: nao foi possivel identificar o arquivo .tgz gerado pelo npm pack do UI Commons."
  echo "Saida do npm pack:"
  echo "$UI_PACK_OUTPUT"
  exit 1
fi
echo "     Snapshot gerado: $UI_COMMONS_TGZ_NAME"

echo "==> [5/5] Atualizando dependencia file: no lexml-parecer"
mkdir -p "$PARECER_UI_COMMONS_DIR"
rm -f "$PARECER_UI_COMMONS_DIR"/*.tgz
rm -rf "$PARECER_UI_COMMONS_DIR/dist"
mv -f "$UI_COMMONS_TGZ_NAME" "$PARECER_UI_COMMONS_DIR/$UI_COMMONS_TGZ_NAME"

cd "$SCRIPT_DIR"
NEW_UI_COMMONS_REF="file:ui-commons/$UI_COMMONS_TGZ_NAME"
CURRENT_UI_COMMONS_REF="$(node - "$PARECER_PACKAGE_JSON" "$UI_COMMONS_DEP_PACKAGE" <<'NODE'
const fs = require('fs');
const pkgPath = process.argv[2];
const depName = process.argv[3];
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const current = pkg.devDependencies && pkg.devDependencies[depName] ? pkg.devDependencies[depName] : '';
process.stdout.write(current);
NODE
)"

if [[ "$CURRENT_UI_COMMONS_REF" != "$NEW_UI_COMMONS_REF" ]]; then
  echo "ALERTA: versao do package.json do Parecer esta diferente da compilada."
  echo "        Atual: $CURRENT_UI_COMMONS_REF"
  echo "        Nova:  $NEW_UI_COMMONS_REF"
  node - "$PARECER_PACKAGE_JSON" "$UI_COMMONS_DEP_PACKAGE" "$NEW_UI_COMMONS_REF" <<'NODE'
const fs = require('fs');
const pkgPath = process.argv[2];
const depName = process.argv[3];
const newRef = process.argv[4];
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.devDependencies = pkg.devDependencies || {};
pkg.devDependencies[depName] = newRef;
if (pkg.dependencies && pkg.dependencies[depName]) {
  delete pkg.dependencies[depName];
}
fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8');
NODE
else
  echo "OK: package.json do Parecer ja aponta para $NEW_UI_COMMONS_REF"
fi

echo "     TGZ salvo em: $PARECER_UI_COMMONS_DIR/$UI_COMMONS_TGZ_NAME"
echo "==> Reinstalando dependencias do Parecer (sem scripts)"
npm install --ignore-scripts
echo "==> Processo concluido com sucesso."
