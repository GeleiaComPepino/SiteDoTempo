function carregar(){
    var texto = window.document.getElementById("texto");
    var imagem = window.document.getElementById("imagem2");
    var data = new Date();
    var hora = data.getHours();
    texto.innerHTML = `Agora são ${hora} horas.`;
    if(hora >= 0 && hora < 12){
        imagem.src = "imagens/manha.png";
        document.body.style.backgroundColor = "#a9f1f6";
    }else if(hora >= 12 && hora < 18){
        imagem.src = "imagens/tarde.png";
        document.body.style.backgroundColor = "#FF8866";
    }else{
        imagem.src = "imagens/noite.png";
        document.body.style.backgroundColor = "#010a3d";
        var titulo = window.document.getElementById("titulo");
    }
}