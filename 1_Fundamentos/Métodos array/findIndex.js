const pessoas = [
    {nome:"Guilherme", idade:18, trabalha:true},
    {nome:"Juscelio", idade:49, trabalha:true},
    {nome:"Carla", idade:27, trabalha:true},
    {nome:"Vinicius", idade:16, trabalha:false}
];

// findIndex

const nomeEspecifico = pessoas.findIndex((pessoa) =>{
    // A condição proposta para o método, é procurar o valor dentro dos itens dentro do array, e retornar o índice do item.
    return pessoa.nome == "Guilherme";
})
console.log(nomeEspecifico)