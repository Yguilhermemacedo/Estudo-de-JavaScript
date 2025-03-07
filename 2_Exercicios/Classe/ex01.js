const veiculos = [];

class Veiculo {
    constructor(marca, modelo, ano, tipo){
        this.marca = marca,
        this.modelo = modelo,
        this.ano = ano,
        this.tipo = tipo
    }

    mostrarDetalhes(){
        console.log(`Descrição do veículo:\n Tipo:${this.tipo}\n Modelo:${this.modelo}\n Marca:${this.marca}\n Ano:${this.ano}`)
    }
}

const civic = new Veiculo("Honda", "Civic LX 1.7", "2003", "Automóvel")
veiculos.push(civic);
civic.mostrarDetalhes();
console.log(`Veículos na garagem: `, JSON.stringify(veiculos, null, 2))


