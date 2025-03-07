const pessoas = [
    {nome:"Guilherme", idade:18, trabalha:true},
    {nome:"Juscelio", idade:49, trabalha:true},
    {nome:"Carla", idade:27, trabalha:true},
    {nome:"Vinicius", idade:16, trabalha:false}
];

const adultos = pessoas.find((pessoa) =>{
    // Quero que o método find retorne o primeiro valor que ele encontrar, se o item percorrido estiver correto com a condição
    return pessoa.idade >= 18;
})

console.log(adultos); // O método find, quando estiver percorrendo o array irá retornar sempre o primeiro item que a condição proposta requer 
