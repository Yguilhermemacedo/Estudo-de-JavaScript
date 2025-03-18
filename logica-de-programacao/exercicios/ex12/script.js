class Conta {
    constructor(titular, senha, saldo) {
        this.titular = titular;
        this.senha = senha;
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor;
        this.salvar();
    }

    saque(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            this.salvar();
        } else {
            console.log("Saldo insuficiente");
        }
    }

    extrato() {
        console.log(`Saldo: ${this.saldo}`);
    }

    salvar() {
        localStorage.setItem('conta', JSON.stringify(this));
    }

    static carregar() {
        const contaData = localStorage.getItem('conta');
        if (contaData) {
            const { titular, senha, saldo } = JSON.parse(contaData);
            return new Conta(titular, senha, saldo);
        }
        return null;
    }
}

alert("Olá, seja bem vindo ao Nexa Bank\n");

let opcao;
while (opcao !== 3) {
    opcao = parseInt(prompt("Escolha uma opção:\n 1 - Criar conta\n 2 - Acessar conta\n 3 - Sair\n Digite a opção desejada: "));

    if (opcao === 1) {
        const titular = prompt("Digite o nome do titular da conta:");
        const saldo = parseFloat(prompt("Digite o saldo inicial da conta (saldo deve ser maior igual á R$100,00): "));
        if (saldo < 100) {
            alert("Saldo inicial deve ser maior igual á R$100,00");
            continue;
        }
        const senha = parseInt(prompt("Crie uma senha de 4 dígitos para sua conta conta: "));
        const conta = new Conta(titular, senha, saldo);
        conta.salvar();
        console.log(conta);
        conta.extrato();
    } else if (opcao === 2) {
        const conta = Conta.carregar();
        if (conta) {
            const senha = parseInt(prompt("Digite a senha de 4 dígitos: "));
            if (senha === conta.senha) {
                let operacao;
                while (operacao !== 4) {
                    operacao = parseInt(prompt("Escolha uma operação:\n 1 - Deposito\n 2 - Saque\n 3 - Extrato\n 4 - Voltar ao menu principal\n Digite a opção desejada: "));
                    if (operacao === 1) {
                        const valor = parseFloat(prompt("Digite o valor do depósito: "));
                        conta.deposito(valor);
                        conta.extrato();
                    } else if (operacao === 2) {
                        const valor = parseFloat(prompt("Digite o valor do saque: "));
                        conta.saque(valor);
                        conta.extrato();
                    } else if (operacao === 3) {
                        conta.extrato();
                    } else if (operacao !== 4) {
                        alert("Opção inválida");
                    }
                }
            } else {
                alert("Senha inválida");
            }
        } else {
            alert("Nenhuma conta encontrada. Por favor, crie uma conta primeiro.");
        }
    } else if (opcao !== 3) {
        alert("Opção inválida");
    }
}


