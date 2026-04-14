# \<lexml-eta-parecer>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i lexml-eta-parecer
```

## Usage

```html
<script type="module">
  import 'lexml-eta-parecer/lexml-eta-parecer.js';
</script>

<lexml-eta-parecer></lexml-eta-parecer>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

## Atualizacao do UI Commons no Parecer (bash)

Para atualizar o TGZ de UI Commons usado no Parecer, execute:

```bash
cd C:/Users/ruan.oliveira/DEV/git/lexml-parecer
./update-lexml-ui-commons.sh
```

### Variavel suportada

- `UI_COMMONS_PATH`: sobrescreve o caminho padrao (`../lexml-ui-commons`).

Exemplo:

```bash
cd C:/Users/ruan.oliveira/DEV/git/lexml-parecer
UI_COMMONS_PATH="C:/Users/ruan.oliveira/DEV/git/lexml-ui-commons" ./update-lexml-ui-commons.sh
```

### O que o script faz

1. Gera versao snapshot temporaria no `lexml-ui-commons`.
2. Executa `npm run prepublish` e `npm pack` no UI Commons.
3. Move o TGZ para `lexml-parecer/ui-commons` (mantendo apenas a versao mais recente).
4. Atualiza `devDependencies["@lexml/lexml-ui-commons"]` para `file:ui-commons/<tgz-gerado>` no `package.json` do Parecer.
5. Executa `npm install --ignore-scripts` no Parecer.
6. Restaura a versao original do projeto `lexml-ui-commons`.

### Observacoes importantes

- O consumo de UI Commons no Parecer e via pacote TGZ (`file:`), sem dependencia de `ui-commons/dist/index.js`.
- O script nao publica pacote em registry; ele so atualiza o fluxo local de desenvolvimento.
- Em caso de caminho invalido, o script aborta com mensagem `ALERTA`.

## Integracao com script do host (LexEdit)

O script do host (`lexeditweb-editor/src/main/javascript/update-lexml-parecer.sh`) pode chamar este script automaticamente quando `UPDATE_UI_COMMONS=true`.

