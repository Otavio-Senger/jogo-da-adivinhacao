var botao = document.getElementById("botao");
var verificacao = document.getElementById("form");

verificacao.addEventListener("submit", function(event){
    //verifica se o formulário é válido
    event.preventDefault();//caso o formulário seja inválido, impede o envio
    if(this.checkVisibility()){
        var nome = document.getElementById('nome').value;
        localStorage.setItem('nomeusuario', nome);
        window.location.href = 'file:///C:/Users/Ot%C3%A1vio/Desktop/jogoAdvivinha%C3%A7%C3%A3o/jogo/jogo.html'

    }
});



