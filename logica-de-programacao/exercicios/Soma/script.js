const n1 = parseInt(prompt("Digite um número: "));
const n2 = parseInt(prompt("Digite outro número: "));

function soma(a,b){
    return a + b;
}

alert(`A soma de ${n1} + ${n2} é igual á ${soma(n1,n2)}`);