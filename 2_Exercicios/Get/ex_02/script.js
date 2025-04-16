const url = 'https://catfact.ninja/fact';

async function buscarFatos() {
    const response = await fetch(url);
    
    if (response.ok) {
        console.log("Conectado.");
      
        const dados = await response.json(); // Aguarda a conversão para JSON
        console.log(dados); // Agora os dados serão exibidos corretamente

    } else {
        console.log('Erro ao conectar.');
    }
}

buscarFatos();
