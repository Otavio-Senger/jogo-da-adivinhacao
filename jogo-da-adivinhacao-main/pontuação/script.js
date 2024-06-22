var parabens = localStorage.getItem('nomeusuario');
document.getElementById('parabens').textContent = parabens;
var tentativas = localStorage.getItem('tentativas');
document.getElementById('tentativas').textContent = tentativas;

//recupera a lista de jogadores
var listajogadores = JSON.parse(localStorage.getItem('listajogadores')) || [];
var listadejogadores =  document.getElementById('listadejogadores');

listajogadores.forEach(function(entry){
    var nomejogador = document.createElement('li');
    nomejogador.textContent = `${entry.nome}: ${entry.tentativa} tentativas`;
    listadejogadores.appendChild(nomejogador);
}); 

document.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        botao.click();
    }
});

var botao = document.getElementById('botao');
botao.addEventListener("click", function(){
    window.location.href = '../formulario/formulario.html'
});
