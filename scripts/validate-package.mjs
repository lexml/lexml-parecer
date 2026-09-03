import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
const declarations = readFileSync('dist/index.d.ts', 'utf8');
const javascript = readFileSync('dist/index.js', 'utf8');
const manifest = JSON.parse(
  readFileSync('dist/custom-elements.json', 'utf8'),
);

const publicRuntimeValues = ['LexmlEtaParecer', 'Parecer', 'Usuario'];
const publicTypes = [
  'AnexoParecer',
  'LexmlEtaParecerParametrosEdicao',
  'LexmlParecerConfig',
  'ObterAnexoBlobResult',
  'Parlamentar',
  'TipoAnexoParecer',
];

const parseExportSpecifiers = value =>
  value
    .split(',')
    .map(name => name.trim())
    .filter(Boolean)
    .map(specifier => {
      const [localName, exportedName = localName] = specifier.split(/\s+as\s+/);
      return { localName, exportedName };
    });

const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

assert.equal(packageJson.types, 'dist/index.d.ts');
assert.equal(packageJson.exports['.'].types, './dist/index.d.ts');
assert.equal(packageJson.customElements, 'dist/custom-elements.json');

const typeExportMatches = [
  ...declarations.matchAll(/export type\s*\{([^}]*)\};/g),
];
assert.equal(
  typeExportMatches.length,
  1,
  'O index.d.ts deve possuir uma única lista pública de tipos.',
);

const exportedTypeSpecifiers = parseExportSpecifiers(typeExportMatches[0][1]);
assert.deepEqual(
  exportedTypeSpecifiers.map(({ exportedName }) => exportedName).sort(),
  [...publicTypes].sort(),
  'A API pública de tipos divergiu da allowlist.',
);

for (const { localName, exportedName } of exportedTypeSpecifiers) {
  assert.match(
    declarations,
    new RegExp(`\\binterface\\s+${escapeRegExp(localName)}\\b`),
    `O tipo público ${exportedName} não aponta para uma interface.`,
  );
}

const declarationRuntimeMatches = [
  ...declarations.matchAll(/^export\s*\{([^}]*)\};$/gm),
];
assert.equal(
  declarationRuntimeMatches.length,
  1,
  'O index.d.ts deve possuir uma única lista pública de valores.',
);

const declarationRuntimeSpecifiers = parseExportSpecifiers(
  declarationRuntimeMatches[0][1],
);
assert.deepEqual(
  declarationRuntimeSpecifiers.map(({ exportedName }) => exportedName).sort(),
  [...publicRuntimeValues].sort(),
  'A API pública de runtime divergiu da allowlist.',
);

for (const { localName, exportedName } of declarationRuntimeSpecifiers) {
  assert.match(
    declarations,
    new RegExp(`\\bclass\\s+${escapeRegExp(localName)}\\b`),
    `O valor público ${exportedName} não aponta para uma classe.`,
  );
}

const javascriptRuntimeMatches = [
  ...javascript.matchAll(/^export\s*\{([^}]*)\};$/gm),
];
assert.equal(
  javascriptRuntimeMatches.length,
  1,
  'O JavaScript deve possuir uma única lista pública de valores.',
);
assert.deepEqual(
  parseExportSpecifiers(javascriptRuntimeMatches[0][1])
    .map(({ exportedName }) => exportedName)
    .sort(),
  [...publicRuntimeValues].sort(),
  'Os valores exportados pelo JavaScript divergem do contrato.',
);

for (const forbiddenReference of [
  '@lexml/lexml-ui-commons',
  'node_modules',
  'C:\\Users\\',
]) {
  assert.equal(
    declarations.includes(forbiddenReference),
    false,
    `Referência não publicável encontrada no index.d.ts: ${forbiddenReference}`,
  );
}

assert.ok(
  manifest.modules.some(module => module.path.startsWith('src/components/')),
  'O manifesto não contém os web components do Parecer.',
);

console.log('Contrato e artefatos do pacote validados com sucesso.');
