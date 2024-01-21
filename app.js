let numeroSecreto = gerarNumero();
let tentativas = 1; 


function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak (texto, "Brazilian Portuguese Female",{rate:1.2});
}
function mensagemInicial() {
    exibirTextoNaTela("h1","JOGO DO NÚMERO SECRETO");
    exibirTextoNaTela("P","Escolha abaixo um número aleatório de 1 á 100");
    exibirTextoNaTela("h2","Boa sorte ! ");
}
mensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1",`Voce acertou o número secreto que é ${numeroSecreto}`);
        let palavraTenativa = tentativas > 1 ? "tentativas": "tentativa";
        let mensagemTentativas=`Voce acertou o número secreto com ${tentativas} ${palavraTenativa}`;
        exibirTextoNaTela("p",mensagemTentativas);
        exibirTextoNaTela("h2","Parabéns!!");
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p",`O número secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela("p",`O número secreto é maior que ${chute}`);

        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumero() {
    return parseInt(Math.random() * 100 + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value=" ";
}

function reiniciarJogo() {
    numeroSecreto= gerarNumero();
    limparCampo();
    tentativas=1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    
}