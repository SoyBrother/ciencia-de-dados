const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais(){
    const res = await fetch(url)

    const dados = await res.json()
    cosole.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_com_acesso_a_educacao} têm acesso a educação e passam ${dados.tempo_medio_dia_estudando} horas estudando e ${dados.total_pessoas_com_educacao_superior}tiveram acesso a educação superior.`
  }

visualizarInformacoesGlobais();