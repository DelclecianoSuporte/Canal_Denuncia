// Menu Hamburguer responsivo
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.style.display = (mobileMenu.style.display === 'block' ? 'none' : 'block');
    });
});


function mostrarFormulario() {
    document.getElementById("formulario-denuncia-1").style.display = "block";
}

function ocultarFormulario() {
    document.getElementById("formulario-denuncia-1").style.display = "none";
}

const opcoes = document.querySelectorAll('input[name="opcao"]');

// Verifica se a opção da pessoa anonima esta como Sim ou Não, se estiver sim habikita formulario
opcoes.forEach((opcao) => {
    opcao.addEventListener('change', function() {
        if (this.value === "ident-sim" && this.checked) {
            mostrarFormulario();
        } else if (this.value === "ident-nao" && this.checked) {
            ocultarFormulario();
        }
    });
});


document.addEventListener('change', function() {
    const opcaoSelecionada = document.getElementById("opcao1").value;
    const opcaoSelecionada2 = document.getElementById("opcao2").value;
    const opcaoSelecionada3 = document.getElementById("opcao3").value;
    const opcaoDigitada1    = document.getElementById("area-setor").value;
    const opcaoSelecionada4 = document.getElementById("opcao4").value;
    const opcaoSelecionada5 = document.getElementById("opcao5").value;
    const opcaoSelecionada6 = document.getElementById("opcao6").value;
    const opcaoSelecionada7 = document.getElementById("opcao7").value;
    const opcaoDigitada2    = document.getElementById("descricao").value;
    const opcaoDigitada3    = document.getElementById("testemunha").value;
    const opcaoDigitada4    = document.getElementById("descricao2").value;
    const opcaoDigitada5    = document.getElementById("descricao3").value;

    const campo1 = document.getElementById("opcao_exibicao1");
    if(campo1){
        campo1.textContent = opcaoSelecionada;
    }

    const campo2 = document.getElementById("opcao_exibicao2")
    if(campo2){
        campo2.textContent = opcaoSelecionada2;
    }

    const campo3 = document.getElementById("opcao_exibicao3");
    if(campo3){
        campo3.textContent = opcaoSelecionada3;
    }

    const campo4 = document.getElementById("opcao_exibicao4");
    if(campo4){
        campo4.textContent = opcaoDigitada1;
    }

    const campo5 = document.getElementById("opcao_exibicao5");
    if(campo5){
        campo5.textContent = opcaoSelecionada4;
    }

    const campo6 = document.getElementById("opcao_exibicao6");
    if(campo6){
        campo6.textContent = opcaoSelecionada5;
    }

    const campo7 = document.getElementById("opcao_exibicao7");
    if(campo7){
        campo7.textContent = opcaoSelecionada6;
    }

    const campo8 = document.getElementById("opcao_exibicao8");
    if(campo8){
        campo8.textContent = opcaoSelecionada7;
    }

    const campo9 = document.getElementById("opcao_exibicao9");
    if(campo9){
        campo9.textContent = opcaoDigitada2;
    }

    const campo10 = document.getElementById("opcao_exibicao10");
    if(campo10){
        campo10.textContent = opcaoDigitada3;
    }

    const campo11 = document.getElementById("opcao_exibicao11");
    if(campo11){
        campo11.textContent = opcaoDigitada4;
    }

    const campo12 = document.getElementById("opcao_exibicao12");
    if(campo12){
        campo12.textContent = opcaoDigitada5;
    }

    criaEmailComDadosInseridosPeloUsuario();
});

function criaEmailComDadosInseridosPeloUsuario(){
    // Coletar o conteúdo das tags e colocá-las no textarea
    var content = '';

    content += 'Qual a sua relação com a Plasdil?\n' + document.getElementById('opcao_exibicao1').textContent + '\n\n';
    content += 'Qual o tipo de denúncia melhor se enquadra ao fato que você está registrando?\n' + document.getElementById('opcao_exibicao2').textContent + '\n\n';
    content += 'Indique o local onde ocorreu o fato que você está denunciando:\n' + document.getElementById('opcao_exibicao3').textContent + '\n\n';
    content += 'Indique a área/setor onde ocorreu o fato que você está denunciando:\n' + document.getElementById('opcao_exibicao4').textContent + '\n\n';
    content += 'Como tomou conhecimento deste fato/transgressão?\n' + document.getElementById('opcao_exibicao5').textContent + '\n\n';
    content += 'Você sabe se algum Diretor, Conselheiro, Gestor, Gerente ou Coordenador, está CIENTE do problema relatado?\n' + document.getElementById('opcao_exibicao6').textContent + '\n\n';
    content += 'Você sabe se algum Diretor, Conselheiro, Gerente ou Coordenador está ENVOLVIDO diretamente no fato relatado?\n' + document.getElementById('opcao_exibicao7').textContent + '\n\n';
    content += 'Você sabe se algum(ns) Diretor(es), Conselheiro (s), Gerente(s) ou Coordenador(es) tentou(ram) ESCONDER o problema relatado?\n' + document.getElementById('opcao_exibicao8').textContent + '\n\n';
    content += 'O que você quer denunciar?\n' + document.getElementById('opcao_exibicao9').textContent + '\n\n';
    content += 'Existem testemunhas? Em caso positivo, indique-as.\n' + document.getElementById('opcao_exibicao10').textContent + '\n\n';
    content += `Você sabe se existem evidências sobre o fato? Em caso positivo, indique-as. (Quais e em que lugar(es) podem ser encontradas evidências sobre o fato denunciado? Existem documentos que comprovam esse fato? Em caso positivo, onde podem ser encontrados? Especifique da forma mais detalhada possível. Lembre-se: qualquer informação pode ser útil, por mais irrelevante que ela pareça para você.)\n` + document.getElementById('opcao_exibicao11').textContent + '\n\n';
    content += 'Caso seja possível, indique o valor financeiro envolvido no fato relatado:\n' + document.getElementById('opcao_exibicao12').textContent + '\n\n';

    // Coloque o conteúdo coletado no textarea
    document.getElementById('message').value = content;
}

// Enviando as respsotas do solicitante da denuncia para a pagina que finaliza a denuncia

function coletarRespostas() {
    const respostaTextArea  = document.getElementById("message").value;

    // var opcaoSelecionada = document.getElementById("opcao1").options[document.getElementById("opcao1").selectedIndex].text;
    var urlDestino = "finaliza-denuncia.html?conteudo=" + encodeURIComponent(respostaTextArea) 
    window.location.href = urlDestino;
}

function exibirOpcao() {
    // Recupera a opção da URL
    var parametros = new URLSearchParams(window.location.search);

    //Recupera o valor de cada parâmetro da URL
    var pegaResposta = parametros.get("conteudo");

    // Exibe a opção como somente leitura na página
    const campo = document.getElementById("respostaUsuario");
    if(campo){
        campo.textContent = pegaResposta;
        console.log(campo.value);
    }
}

window.onload = exibirOpcao;

//A opção abaixo é caso eu queria fazer com o formulario que consome API

// document.querySelector(".meu-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     var pegaRespostaTextArea = document.getElementById("message").value;

//     // Redirecionar para a próxima página com o valor do textarea
//     window.location.href = "finaliza-denuncia?conteudo=" + encodeURIComponent(pegaRespostaTextArea);
// });


// // Obter o texto da URL (a parte após '?texto=')
// const urlParams = new URLSearchParams(window.location.search);
// const textoRecebido = urlParams.get("conteudo");

// // Definir o valor do novo textarea com o texto recebido
// document.getElementById("respostaUsuario").value = textoRecebido;


// Pagina de finaliza denuncia

function geraIdGuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

//Não vai usar mais a função de data
// function geraDataAtual() {
//     const data = new Date();
//     const dia = data.getDate().toString().padStart(2, '0');
//     const mes = (data.getMonth() + 1).toString().padStart(2, '0');
//     const ano = data.getFullYear();
//     const hora = data.getHours().toString().padStart(2, '0');
//     const minutos = data.getMinutes().toString().padStart(2, '0');
//     const segundos = data.getSeconds().toString().padStart(2, '0');

//     const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;

//     return dataFormatada;
// }

//Não vai precisar mais pegar o numero de protocolo
// function geraProtocolo() {
//     const dataAtual = new Date();
//     const dia = dataAtual.getDate().toString().padStart(2, '0');
//     const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
//     const hora = dataAtual.getHours().toString().padStart(2, '0');
//     const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
//     const segundos = dataAtual.getSeconds().toString().padStart(2, '0');
  
//     // Gera um número aleatório de 4 dígitos
//     const numeroAleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
//     const numeroConvertido = `${numeroAleatorio}${dia}${mes}${hora}${minutos}${segundos}`;

//     return numeroConvertido;
// }


function geraProtocoloEMostraNaPagina() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const hora = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0');
  
    // Gera um número aleatório de 4 dígitos
    const numeroAleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
    // Concatena os valores para formar um número de 10 dígitos, dessa forma o numero aleatorio começa com a data no inicio
    // const numeroConvertido = `${dia}${mes}${hora}${minutos}${segundos}${numeroAleatorio}`;

    // Concatena os valores no meio para formar um número de 10 dígitos
    const numeroConvertido = `${numeroAleatorio}${dia}${mes}${hora}${minutos}${segundos}`;

    // Redirecione para a página com o número como parâmetro na URL
    window.location.href = "protocolo-gerado.html?protocolo=" + numeroConvertido;
}


// Função para obter o número de protocolo a partir da URL
function obterNumeroDeProtocoloDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const protocolo = urlParams.get("protocolo");
    return protocolo;
}

// Exibe o número de protocolo na página
const mostraNumeroDeProtocolo = obterNumeroDeProtocoloDaURL();
if (mostraNumeroDeProtocolo) {
    document.getElementById("protocoloGerado").textContent = mostraNumeroDeProtocolo;
}

const botaoFinalizaDenuncia = document.getElementById("finalizar-denuncia");

// Consumo de API

document.addEventListener("DOMContentLoaded", function() {
    if(botaoFinalizaDenuncia){
        botaoFinalizaDenuncia.addEventListener("click", function() {

            alert("Sucesso, Enviando a denuncia");
    
            const Id = geraIdGuid();
            const Mensagem = document.getElementById('respostaUsuario').value;
    
            const dados = {
                Id,
                Mensagem
            };
            
            // URL da sua API
            const urlDaAPI = "https://localhost:5001/api/denuncias";
    
            // Configuração da solicitação
            const configuracao = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            };
    
            // Envie a solicitação para a API
            fetch(urlDaAPI, configuracao)
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Erro na solicitação à API');
                }
                return response.json();
            })
            .then(data => {
                if (data && data.data) {
                    const numeroProtocolo = data.data.numero_Protocolo;
                    if (numeroProtocolo) {
                        console.log('Número de Protocolo:', numeroProtocolo);
            
                        // Redirecionando para a proxima pagina para mostrar o numero de protocolo
                        window.location.href = `protocolo-gerado.html?retornaNumeroDoBanco=${numeroProtocolo}`;
                    } else {
                        console.error('Número de Protocolo não encontrado na resposta da API');
                    }
                } else {
                    console.error('Estrutura inválida na resposta da API');
                }
                console.log('Sucesso', data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
       });
    }
});


//O CODIGO ABAIXO É MUITO PRECISO NÃO APAGAR ESSE COMENTARIO JAMAIS TALVEZ VOCE VAI PRECISAR PEGAR O NUMERO DO PROTOCOLO
// .then(data => {
//     if (data && data.data) {
//         const numeroProtocolo = data.data.numero_Protocolo;
//         if (numeroProtocolo) {
//             console.log('Número de Protocolo:', numeroProtocolo);
//         } else {
//             console.error('Número de Protocolo não encontrado na resposta da API');
//         }
//     } else {
//         console.error('Estrutura inválida na resposta da API');
//     }
//     console.log('Sucesso', data);
// })
//

//Função que mostra para o usuario o numero do Protocolo que foi Gerado 
document.addEventListener("DOMContentLoaded", async function() {
    const urlParams = new URLSearchParams(window.location.search);
    //const retornaNumeroDoBanco = urlParams.get('Numero_Protocolo');
    const retornaNumeroDoBanco = urlParams.get('retornaNumeroDoBanco'); // Corrigido para corresponder à URL que você está usando.

    if (retornaNumeroDoBanco) {
        // Faça uma solicitação GET para buscar o número de protocolo com base no Numero
        const urlDaAPI = `https://localhost:5001/api/denuncias/${retornaNumeroDoBanco}`;
        try {
            const response = await fetch(urlDaAPI);
            if (response.ok) {
                const data = await response.json();
                console.log(data);

                // Com numero de Protocolo já gerado salvo no banco agora vamos mostrar na tela
                const mostrarNumeroDoProtocolo = data.data[0].numero_Protocolo;
                console.log(mostrarNumeroDoProtocolo);

                const carregaNumeroDeProtocolo = document.getElementById('protocoloGerado');

                if (carregaNumeroDeProtocolo) {
                    carregaNumeroDeProtocolo.textContent = ` Este é o seu número de protocolo:  ${mostrarNumeroDoProtocolo}`;
                    copiaNumero();
                }
            } else {
                console.error('Erro na solicitação à API');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    }
});


function copiaNumero(){
    // Adiciona um evento de clique ao ícone
    document.getElementById('iconeCopy').addEventListener('click', function() {
        // Seleciona o texto dentro do span
        const textoProtocolo = document.getElementById('protocoloGerado').innerText;

        const retiraNumero = textoProtocolo.substring(34);
        console.log(retiraNumero);
        

        // Cria um elemento de área de texto temporário
        const inputTemporario = document.createElement('textarea');
        inputTemporario.value = retiraNumero;

        // Adiciona o elemento temporário à página
        document.body.appendChild(inputTemporario);

        // Seleciona o conteúdo do elemento temporário
        inputTemporario.select();
        inputTemporario.setSelectionRange(0, 99999); // Para dispositivos móveis

        // Copia o conteúdo para a área de transferência
        document.execCommand('copy');

        // Remove o elemento temporário
        document.body.removeChild(inputTemporario);

        // Exibe uma mensagem ou realiza qualquer ação adicional
        alert('Número de protocolo copiado: ' + retiraNumero);
    });
}









