// Vamos exercitar classe, simulando uma conta bancária simples.

// 1 - Criar a classe
class Conta {
    constructor(titular,saldo){
        this.titular = titular,
        this.saldo = saldo
    }

    deposito(valor){
       this.saldo += valor;
       console.log(`Depósito concluído com sucesso!\n Valor: R$${valor}.`)
    }

    saque(valor){
        this.saldo -= valor;
        // Verificando se o saldo é maior que 0 
        if(valor > this.saldo){
            console.warn(`Saldo insuficiente.`);
        }else{
            console.log(`Saque no valor de R${valor}, realizado com sucesso.`);
        }
    }

    mostrarSaldoAtual(){
        console.log(`Seu saldo atual: R$${this.saldo}.`);
    }
}

const user = new Conta("Guilherme Macedo", 0);

user.deposito(100);
user.mostrarSaldoAtual();
user.saque(18.90);
user.mostrarSaldoAtual();