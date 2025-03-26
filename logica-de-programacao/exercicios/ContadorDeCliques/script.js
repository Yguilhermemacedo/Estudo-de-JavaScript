let contador = 0;

function contarCliques(){
    contador++;

    const botao = document.querySelector("button");

    botao.textContent = `Cliques = ${contador}`

}