function mudarTexto(){
    let textoElemento = document.getElementById('texto');
    let contador = 5;

    const intervalo = setInterval(() =>{
        if (contador === 0){
            clearInterval(intervalo);
            textoElemento.innerText = 'Mudou!';
        }else{
            textoElemento.innerText = contador;
            contador--;
        }

    }, 1000)
}