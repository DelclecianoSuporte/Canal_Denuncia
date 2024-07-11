// Recupere o parâmetro 'protocolo' da URL
const urlParams = new URLSearchParams(window.location.search);
const protocolo = urlParams.get('protocolo');

// Agora, 'protocolo' contém o número aleatório que você passou da página anterior
console.log(protocolo);


function obterDataHoraFormatada() {
    const dataHoraAtual = new Date();
    const dia = String(dataHoraAtual.getDate()).padStart(2, '0');
    const mes = String(dataHoraAtual.getMonth() + 1).padStart(2, '0'); // Note que os meses são base 0 (janeiro = 0)
    const ano = dataHoraAtual.getFullYear();
    const horas = String(dataHoraAtual.getHours()).padStart(2, '0');
    const minutos = String(dataHoraAtual.getMinutes()).padStart(2, '0');

    const dataHoraFormatada = `${dia}-${mes}-${ano} ${horas}:${minutos}`;
    return dataHoraFormatada;
}

function criarTabelaComProtocolo() {
    const numeroProtocolo = protocolo; // Substitua pelo seu número de protocolo
    const dataHoraFormatada = obterDataHoraFormatada();

    document.getElementById("numeroProtocolo").textContent = numeroProtocolo;
    document.getElementById("dataAtual").textContent = dataHoraFormatada;
}

//Chame a fução para criar a tabela
criarTabelaComProtocolo();

