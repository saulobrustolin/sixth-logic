//IDs: inMensagem, btCriptografar, btDescriptografar, outResposta

function Criptografar(){
    var inMensagem = document.getElementById("inMensagem");
    mensagem = inMensagem.value;

    var outResposta = document.getElementById("outResposta");

    var pares = "";
    var impares = "";

    for(var i = 0; i < mensagem.length; i++){
        if(i % 2 == 1){
            impares += mensagem.charAt(i);
        } else {
            pares += mensagem.charAt(i);
        }
    }

    outResposta.textContent = impares + pares;
}

function Descriptografar(){
    var inMensagem = document.getElementById("inMensagem");
    mensagem = inMensagem.value;

    var outResposta = document.getElementById("outResposta");

    var pares = mensagem.substring(mensagem.length/2);
    var impares = mensagem.substring(0, mensagem.length/2);

    console.log(pares.length);
    console.log(impares);

    var resposta = "";

    for(var i = 0; i < mensagem.length/2; i++){
            resposta += pares.charAt(i);
            resposta += impares.charAt(i);
    }

    outResposta.textContent = resposta;
}

var criptografar = document.getElementById("btCriptografar");
criptografar.addEventListener("click", Criptografar)

var descriptografar = document.getElementById("btDescriptografar");
descriptografar.addEventListener("click", Descriptografar);