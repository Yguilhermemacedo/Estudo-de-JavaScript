class Veiculo {
    constructor(marca, modelo, ano, cor, placa) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.placa = placa;
    }
    mostrarDados(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Placa: ${this.placa}`);
    }
}

const button = document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();

    const modelo = document.querySelector('#modelo').value;
    const marca = document.querySelector('#marca').value;   
    const ano = document.querySelector('#ano').value;
    const cor = document.querySelector('#cor').value;
    const placa = document.querySelector('#placa').value;

    const carro = new Veiculo(marca, modelo, ano, cor, placa);
    carro.mostrarDados();

    localStorage.setItem('veiculo', JSON.stringify(carro));
    const listaVeiculos = document.querySelector('.lista');
    const item = document.createElement('li');
    item.textContent = localStorage.getItem('carro');
});



