let count = 0;
const contador = document.querySelector(".contador");

function aumentar(){
    count++;
    contador.innerText = count;
}
function diminuir(){
    count--;
    contador.innerText = count;
}