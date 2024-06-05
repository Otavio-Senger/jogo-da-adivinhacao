var botao = document.getElementById("botao");
var verificacao = document.getElementById("form");

verificacao.addEventListener("submit", function(){
    //verifica se o formulário é válido
    if(this.checkVisibility()){
        event.preventDefault();//caso o formulário seja inválido, impede o envio
        
        botao.addEventListener("click", function(){
        window.location.href = 'file:///C:/Users/Ot%C3%A1vio/Desktop/jogoAdvivinha%C3%A7%C3%A3o/jogo/jogo.html'
 });
    }
});



