const button = document.querySelector("button");

function mudarTema() {
    document.body.classList.toggle("dark-mode"); // Removi o ponto na classe

    let title = document.createElement("h1");
    title.textContent = "UAAUUUUUUUUUUU MUDOU DE COR VÉÉÉÉÉIIIIIHHH";
    
    document.body.appendChild(title); 
}

button.addEventListener("click", mudarTema); 
