var nome = localStorage.getItem('nomeusuario');
document.getElementById('mostrarnome').textContent = nome;

var min = 1;
var max = 10;
var gerar = Math.floor(Math.random() * (max-min+1)) + min;
var adivinhar = document.getElementById("adivinhar");
var campo = parseInt(document.getElementById("digitar").value);
var mensagem = document.getElementById("mensagem");
var tentativa = 0;
var mss = document.getElementById('mss');
console.log(gerar);

function verificarAdivinhacao() {
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
        window.location.href = '../pontuação/pontuacao.html'
    }

    if (campo - gerar == 1 || campo - gerar == -1) {
        mss.style.backgroundColor = "red";
    }else if (campo - gerar == 2 || campo - gerar == -2) {
        mss.style.backgroundColor = "yellow";
        mss.style.color = "black";
    }else{
        mss.style.backgroundColor = "blue";
        mss.style.color = "black";
    }

}

//funcionar o enter
adivinhar.addEventListener('click', verificarAdivinhacao);

document.getElementById('digitar').addEventListener('keydown', function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        verificarAdivinhacao();
    }
});