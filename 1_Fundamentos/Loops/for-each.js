// const pessoas = [
//     {nome:"Guilherme", idade:18, sexo:"Masculino"},
//     {nome:"Marina", idade:18, sexo:"Feminino"},
//     {nome:"Vinícius", idade:17, sexo:"Masculino"}
// ]

// pessoas.forEach((pessoa)=>{
// if(pessoa.sexo === "Masculino"){
//     console.log(`Segue as pessoas homens: ${pessoa.nome}.`)
// }
// })

let pessoas = ['Guilherme', 'Vitu', 'João Cássio'];
console.log(pessoas)
for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i] === 'Guilherme'){
        pessoas.splice(i, 1);
        break;
    }
}
console.log(pessoas)