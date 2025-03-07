function atualizarHora() {
    const data = new Date();
    const hora = data.toLocaleTimeString();
    
    bloco.innerHTML = `${hora}`;
}

// Criando o elemento <h1> e adicionando ao DOM
let bloco = document.createElement("h1");
document.body.appendChild(bloco);

// Atualiza a hora a cada segundo
atualizarHora(); // Atualiza imediatamente ao carregar a página
setInterval(atualizarHora, 1000);
