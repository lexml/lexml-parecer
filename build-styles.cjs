const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');
const prefixer = require('postcss-prefix-selector');
const path = require('path');

// --- CONFIGURAÇÃO ---
const FILES = {
  reset: {
    input: 'node_modules/@awesome.me/webawesome/dist/styles/webawesome.css',
    variableName: 'waResetString'
  },
  theme: {
    input: 'node_modules/@awesome.me/webawesome/dist/styles/themes/shoelace.css',
    variableName: 'waThemeString'
  },
  output: 'src/assets/css/wa-bundled.ts'
};

const CDN_FONTS_URL = 'https://early.webawesome.com/webawesome@3.0.0-beta.6/dist/fonts/';

console.log('Iniciando automação de estilos Web Awesome...');

// Função auxiliar para escapar caracteres que quebram Template Strings
function escapeForTemplate(str) {
  return str
    .replace(/`/g, '\\`')     // Escapa a crase (backtick)
    .replace(/\${/g, '\\${'); // Escapa a interpolação ${...}
}

async function processCss(filePath, isTheme) {
  const cssContent = fs.readFileSync(filePath, 'utf8');

  const result = await postcss([
    // 1. Resolve @imports (Flatten)
    atImport(),

    // 2. Escopo (#lexml-parecer-app)
    prefixer({
      prefix: '#lexml-parecer-app',
      transform: function (prefix, selector, prefixedSelector) {
        // Tema: substitui :root por #lexml-parecer-app
        if (selector.includes(':root')) {
          return selector.replace(/:root/g, prefix);
        }
        // Base: não prefixa html/body, mas troca por #lexml-parecer-app para segurança
        if (selector === 'html' || selector === 'body') {
          return prefix;
        }
        if (selector.startsWith(prefix)) return selector;

        return prefixedSelector;
      }
    })
  ]).process(cssContent, { from: filePath, map: false });

  let css = result.css;

  // 3. Substituição de Fontes (Apenas no Reset)
  if (!isTheme) {
    css = css.replace(/url\(['"]?(\.\.\/fonts\/)([^'"]+)['"]?\)/g, (match, prefix, file) => {
      return `url('${CDN_FONTS_URL}${file}')`;
    });
  }

  return css;
}

async function build() {
  try {
    // Processa Reset e Tema em paralelo
    const [resetCss, themeCss] = await Promise.all([
      processCss(FILES.reset.input, false),
      processCss(FILES.theme.input, true)
    ]);

    // Cria o conteúdo do arquivo TypeScript
    const tsContent = `
/* eslint-disable no-useless-escape */
/**
 * ARQUIVO GERADO AUTOMATICAMENTE via build-styles.cjs
 * NÃO EDITE MANUALMENTE.
 */

// 1. O TEMA (shoelace)
export const ${FILES.theme.variableName} = \`
${escapeForTemplate(themeCss)}
\`;

// 2. A BASE (Estrutura Base e Utilitários)
export const ${FILES.reset.variableName} = \`
${escapeForTemplate(resetCss)}
\`;
`;

    // Garante que a pasta de destino existe
    const dir = path.dirname(FILES.output);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Escreve o arquivo final
    fs.writeFileSync(FILES.output, tsContent);

    console.log(`Arquivo gerado em: ${FILES.output}`);

  } catch (err) {
    console.error('Erro fatal no build:', err);
    process.exit(1);
  }
}

build();
