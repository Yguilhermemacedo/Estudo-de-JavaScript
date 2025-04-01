// Explicação sobre o fetch:
/*
 O método fetch() é utilizado para fazer requisições HTTP assíncronas. Ele retorna uma Promise que resolve para o objeto Response representando a resposta à requisição.
*/

// Exemplo de uso do fetch:
/*
fetch('https://api.github.com/users/github')
  .then(response => response.json())
  .then(data => console.log(data));
*/

function buscarCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if(data.erro){
                console.warn('CEP não encontrado!');
            }else{
                console.log(data)
            }
        })
        .catch(error => console.error('Ocorreu um erro:', error))

}

buscarCep('04531011')