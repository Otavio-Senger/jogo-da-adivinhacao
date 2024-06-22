var botao = document.getElementById('botao');
botao.addEventListener('click', function(){
    // window.location.href = '../jogo/jogo.html'
});

document.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        botao.click();
    }
});
