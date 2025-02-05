let count = 0;

function aumentar(){
    const contador = document.querySelector(".contador");
    count++;
    contador.innerText = count;
}
function diminuir(){
    const contador = document.querySelector(".contador");
    count--;
    contador.innerText = count;
}