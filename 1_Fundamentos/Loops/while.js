var opcao = "Sim";
let listaNomes = [];
while(opcao === "Sim"){
    let nome = String(prompt("Digite um nome: "));
    listaNomes.push(nome)
    let opcao = String(prompt("Deseja continuar adicionando nomes? : "))

    if(opcao === "Não"){
        break;
    }else{
        continue;
    }
}
alert(`Segue sua lista de nomes: ${listaNomes}`)