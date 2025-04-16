// Criando um objeto Date para uma data específica (ano, mês, dia, hora, minuto, segundo, milissegundo)
// Nota: O mês é baseado em zero (0 = Janeiro, 11 = Dezembro)
const dataEspecifica = new Date(2023, 9, 15, 10, 30, 0); // 15 de Outubro de 2023, 10:30:00
console.log("Data específica:", dataEspecifica);

// Convertendo uma string para um objeto Date
const dataString = new Date("2025-10-15T10:30:00");
console.log("Data a partir de string:", dataString);

// Obtendo partes da data
console.log("Ano:", dataAtual.getFullYear());
console.log("Mês (0-11):", dataAtual.getMonth());
console.log("Dia do mês:", dataAtual.getDate());
console.log("Dia da semana (0-6):", dataAtual.getDay());
console.log("Horas:", dataAtual.getHours());
console.log("Minutos:", dataAtual.getMinutes());
console.log("Segundos:", dataAtual.getSeconds());

// Formatando uma data para uma string legível
const dataFormatada = dataAtual.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
});
console.log("Data formatada (pt-BR):", dataFormatada);

// Adicionando dias a uma data
const novaData = new Date(dataAtual);
novaData.setDate(novaData.getDate() + 7); // Adiciona 7 dias
console.log("Data após adicionar 7 dias:", novaData);

// Comparando datas
const data1 = new Date("2023-10-15");
const data2 = new Date("2023-10-20");
if (data1 < data2) {
    console.log("data1 é anterior a data2");
} else if (data1 > data2) {
    console.log("data1 é posterior a data2");
} else {
    console.log("As datas são iguais");
}

// Calculando a diferença entre datas
const diferencaMs = data2 - data1; // Diferença em milissegundos
const diferencaDias = diferencaMs / (1000 * 60 * 60 * 24); // Convertendo para dias
console.log("Diferença em dias entre data1 e data2:", diferencaDias);




