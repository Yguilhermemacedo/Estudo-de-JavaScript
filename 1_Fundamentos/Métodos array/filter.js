const pessoas = [
    {nome:"Guilherme", idade:18, trabalha:true},
    {nome:"Juscelio", idade:49, trabalha:true},
    {nome:"Carla", idade:27, trabalha:true},
    {nome:"Vinicius", idade:16, trabalha:false}
];

// Filter
const pessoaNaoTrabalhando = pessoas.filter((pessoa) =>{
    // Estou atribuindo um 'filtro' para que o método percorra o array e filtre e mostre os itens que estão de acordo com o filtro sugerido.
    return pessoa.trabalha == false;
});
console.log(pessoaNaoTrabalhando);

