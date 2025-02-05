// Array
const listaNome = [];
for(let i = 1; i < 5; i++){
    const nome = String(prompt("Digite um nome: "));
    listaNome.push(nome);
    alert(`Lista de nomes: ${listaNome}`)
}