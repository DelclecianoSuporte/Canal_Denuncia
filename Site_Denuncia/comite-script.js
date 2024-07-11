// Função para preencher o select com os números de protocolo
function preencherSelectComProtocolos() {

    // Vou na API e faço uma solicitação GET para obter os números de protocolo existente
    fetch('https://localhost:5001/api/denuncias/protocolos/abertos')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data && data.data && Array.isArray(data.data)) {
                const select = document.getElementById('protocolos-aberto');
                // Limpe quaisquer opções existentes no select
                select.innerHTML = '';
                // Adicione uma opção vazia para seleção padrão
                select.appendChild(new Option('', ''));

                // Preencha o select com os números de protocolo
                data.data.forEach((protocolo) => {
                    // const opcoesProtocolo = `Protocolo: ${protocolo.numero_Protocolo}`;
                    //select.appendChild(new Option(protocolo.numero_Protocolo, protocolo.numero_Protocolo));
                    const option = new Option(protocolo.numero_Protocolo, protocolo.numero_Protocolo);
                    option.dataset.mensagem = protocolo.mensagem; // Adicione a mensagem como um atributo de dados
                    select.appendChild(option);
                });
            } else {
                console.error('Estrutura de dados inválida ou vazia.');
            }
        })
        .catch(error => {
            console.error('Erro ao obter numeros de protocolos: ' + error);
        });
}

preencherSelectComProtocolos();

// const selectElement = document.getElementById('protocolos-aberto');
// selectElement.addEventListener('change', function () {
//     const selectedOption = selectElement.value;
//     console.log('Opção selecionada:', selectedOption);
// });

const select = document.getElementById('protocolos-aberto');
const textarea = document.getElementById('resposta-comite');

function resposta_Denuncia() {
    const campoAdicionaMensagem = document.getElementById('mensagem-denuncia');
    campoAdicionaMensagem.value = ''; // Deixe o campo vazio por padrão

    select.addEventListener('change', function () {
        // Pega a opção que foi selecionada
        const selectedOption = select.options[select.selectedIndex];
        const mensagemRetornada = selectedOption.dataset.mensagem;

        // Verifica se a opção selecionada não está vazia
        if (selectedOption.value) {
            campoAdicionaMensagem.style.display = 'block';
            campoAdicionaMensagem.value = mensagemRetornada; //Se selecionar algum protocolo preencha com a mensagem
        } else {
            campoAdicionaMensagem.value = ''; // Deixe o campo vazio se nada foi selecionado
            campoAdicionaMensagem.style.display = 'none';
        }

        // Verifica se a opção selecionada é diferente da anterior, se for, entre no if
        if (selectedOption.value !== textarea.dataset.selectedOption) {
            // Limpa o conteúdo do textarea
            textarea.value = '';
            // Atualiza o atributo de dados para a nova opção selecionada
            textarea.dataset.selectedOption = selectedOption.value;
        }

        // Exibe ou oculta o textarea com base na opção selecionada
        if (selectedOption.value) {
            textarea.style.display = 'block';
        } else {
            textarea.style.display = 'none';
        }
    });

    // Forneça uma chamada inicial para configurar o textarea com base na opção inicial do select
    select.dispatchEvent(new Event('change'));
}

resposta_Denuncia();

const botaoEnviar = document.getElementById('enviar-resposta');


botaoEnviar.addEventListener('click', function() {

    const numeroProtocoloSelecionado = select.value;
    const resposta = textarea.value;

    // Verifique se um número de protocolo foi selecionado
    if (!numeroProtocoloSelecionado) {
        alert('Selecione um numero de protocolo antes de enviar a resposta.');
        return; // Impede o envio da resposta se não houver um número de protocolo selecionado
    }

    // Verifique se o campo de resposta não está vazio
    if (!resposta.trim()) {
        alert('Digite uma resposta antes de enviar.');
        return; // Impede o envio da resposta se o campo estiver vazio
    }

    // Concatenando o número do protocolo na URL
    const urlDaAPI = `https://localhost:5001/api/denuncias/${numeroProtocoloSelecionado}`;
    console.log(urlDaAPI);

    fetch(urlDaAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            resposta: resposta,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Lide com a resposta do servidor, se necessário
        console.log(data);
        alert('Sucesso, resposta salva no banco');
        textarea.value = '';
        textarea.style.display = 'none';
        select.value = '';
        const campoAdicionaMensagem = document.getElementById('mensagem-denuncia');
        campoAdicionaMensagem.value = '';
        campoAdicionaMensagem.style.display = 'none';
        //console.log('Sucesso resposta salva no banco');
        // Recarrega a página apos salvar uma resposta com sucesso
        window.location.reload(true);
    })
    .catch(error => {
        console.error('Erro ao enviar resposta:', error);
    });
});


