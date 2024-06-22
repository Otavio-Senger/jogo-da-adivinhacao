var botao = document.getElementById("botao");
var verificacao = document.getElementById("form");

window.onload = function(){
    document.getElementById('nome').focus();
};

verificacao.addEventListener("submit", function(event){
    //verifica se o formulário é válido
    event.preventDefault();//caso o formulário seja inválido, impede o envio
    if(this.checkValidity()){
        var nome = document.getElementById('nome').value;
        localStorage.setItem('nomeusuario', nome);
        window.location.href = '../jogo/jogo.html'


    }
});



