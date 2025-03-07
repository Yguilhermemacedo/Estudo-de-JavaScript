const pessoas = [
    {nome:"Guilherme", idade:18, trabalha:true},
    {nome:"Juscelio", idade:49, trabalha:true},
    {nome:"Carla", idade:27, trabalha:true},
    {nome:"Vinicius", idade:16, trabalha:false}
];

const users = pessoas.map((user) =>{
    // O map irá percorrer todo o array, e mediante a condição, ele fará algo com os itens do array
    if(user.idade >= 18){
        return `Parabéns ${user.nome} você é maior de idade.`
    }else{
        return `Que pena ${user.nome} você é menor de idade.`
    }
})
console.log(users)