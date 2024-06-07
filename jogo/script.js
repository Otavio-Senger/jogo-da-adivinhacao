var nome = localStorage.getItem('nomeusuario');
document.getElementById('mostrarnome').textContent = nome;

var min = 1;
var max = 10;
var gerar = Math.floor(Math.random() * (max-min+1)) + min;
var adivinhar = document.getElementById("adivinhar");
var campo = parseInt(document.getElementById("digitar").value);
var mensagem = document.getElementById("mensagem");
var tentativa = 0;
console.log(gerar);

adivinhar.addEventListener("click", function(){
    var campo = parseInt(document.getElementById("digitar").value);
    tentativa++;
   
    if(campo < gerar) {
        mensagem.textContent = "O número é muito baixo!" 
    }else if (campo > gerar) {
        mensagem.textContent = "O número é muito alto!"
    }else if (campo === gerar) {
        // Recupera a lista de tentativas anteriores do localStorage
        var listajogadores = JSON.parse(localStorage.getItem('listajogadores')) || [];
        //adiciona uma nova tentativa a lista
        listajogadores.push({nome: nome, tentativa: tentativa});
        //salva a lista no storage
        localStorage.setItem('listajogadores', JSON.stringify(listajogadores));
        //salva o número de tentativas
        localStorage.setItem('tentativas', tentativa);
        window.location.href = 'file:///C:/Users/Ot%C3%A1vio/Desktop/jogoAdvivinha%C3%A7%C3%A3o/pontua%C3%A7%C3%A3o/pontuacao.html'
    }
});