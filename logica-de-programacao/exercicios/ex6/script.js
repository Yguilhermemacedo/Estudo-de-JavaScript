function adicionarItem(){
    const lista = document.getElementById("lista");
    const nome = document.getElementById("nome").value;
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li)
}