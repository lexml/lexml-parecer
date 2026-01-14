const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');
const prefixer = require('postcss-prefix-selector');

const inputFile = 'node_modules/@awesome.me/webawesome/dist/styles/webawesome.css';
const outputFile = 'webawesome-scoped.css';

console.log('Iniciando processamento do CSS...');

const css = fs.readFileSync(inputFile, 'utf8');

postcss([
  atImport(),

  prefixer({
    prefix: '.wa-scope',
    transform: function (prefix, selector, prefixedSelector, filePath, rule) {
      if (selector.includes(':root')) {
        return selector.replace(/:root/g, prefix);
      }

      if (selector === 'html' || selector === 'body') {
        return prefix;
      }

      if (selector.startsWith(prefix)) {
        return selector;
      }

      return prefixedSelector;
    }
  })
])
  .process(css, {
    from: inputFile,
    to: outputFile
  })
  .then(result => {
    fs.writeFileSync(outputFile, result.css);
    console.log(`Sucesso! Arquivo gerado: ${outputFile}`);
    console.log('Verifique se as classes começam com .wa-scope dentro do lexml-eta-parecer.component.ts.');
  })
  .catch(err => {
    console.error('Erro ao processar CSS:', err);
  });
