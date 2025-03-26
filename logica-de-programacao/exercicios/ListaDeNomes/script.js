// Array
const listaNome = [];
const opcao = Number(prompt("Digite a quantidade de nomes que deseja inserir: "));
for(let i = 1; i < opcao; i++){
    const nome = String(prompt("Digite um nome: "));
    listaNome.push(nome);
    alert(`Lista de nomes: ${listaNome}`)
}