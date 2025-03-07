class Pessoa {
    // Método construtor da classe, onde serão passados os parametros
    constructor(nome,idade){
        this.nome = nome,
        this.idade = idade
    }
    
    // Método da classe
    falar() {
        return "Olá"
    }
}

const primeiraPessoa = new Pessoa("Guilherme", 19)
console.log(`${primeiraPessoa.falar()} eu sou ${primeiraPessoa.nome}.`)
