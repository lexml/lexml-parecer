/* eslint-disable  */
export function installMockApi(base = '/api') {
  const origFetch = window.fetch.bind(window);

  const comissoesUrl      = new URL('./comissoes.json', import.meta.url).href;
  const parlamentaresUrl  = new URL('./parlamentares.json', import.meta.url).href;
  const materiasUrl      = new URL('./materias.json', import.meta.url).href;

  async function loadJson(url) {
    const r = await origFetch(url, { cache: 'no-cache' });
    if (!r.ok) throw new Error(`Falha ao carregar mock: ${url}`);
    return r.json();
  }

  window.fetch = async (input, init = {}) => {
    const reqUrl = new URL(typeof input === 'string' ? input : input.url, location.href);
    const method = (init.method || 'GET').toUpperCase();

    const isPath = (p) => reqUrl.pathname.startsWith(base + p);

    // /api/comissoes?siglaCasaLegislativa=SF
    if (method === 'GET' && isPath('/comissoes')) {
      const data = await loadJson(comissoesUrl);
      const sigla = reqUrl.searchParams.get('siglaCasaLegislativa');
      const list = sigla ? data.filter(c => c.siglaCasaLegislativa === sigla) : data;
      return new Response(JSON.stringify(list), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // /api/parlamentares?siglaCasaLegislativa=CD
    if (method === 'GET' && isPath('/parlamentares')) {
      const data = await loadJson(parlamentaresUrl);
      const sigla = reqUrl.searchParams.get('siglaCasaLegislativa');
      const list = sigla ? data.filter(p => p.siglaCasa === sigla) : data;
      return new Response(JSON.stringify(list), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (method === 'GET' && isPath('/materias')) {
      const data = await loadJson(materiasUrl);
      const termo = reqUrl.searchParams.get('q'); 

      const list = termo
        ? data.filter(m => 
            m.identificacaoTexto.toLowerCase().includes(termo.toLowerCase()) ||
            m.ementa.toLowerCase().includes(termo.toLowerCase())
          )
        : data;
        
      return new Response(JSON.stringify(list), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return origFetch(input, init);
  };

  

  // opcional: retornar função para desfazer
  return () => { window.fetch = origFetch; };
}
