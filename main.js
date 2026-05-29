const botoes = document.querySelectorAII(".botao");
const textos = document.querySelectorAII(".aba-conteudo");

for (let i=0;i <botoes.length;i++) {
    botoes[i].onclik = function(){

 for(let j = 0;j<botoes.length;j++){
    botoes[j].classList.remove("ativo");
    textos[j].classList.remove("ativo");
}

 botoes[i].classList.add("ativo")
 textos[i].classList.add("ativo")

    }
}
 
 const contadores = document.querySelectorAII(".contador");
 const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
 let tempoAtual = new Date();

 contadores[0].textContent = tempoObjetivo-tempoAtual;