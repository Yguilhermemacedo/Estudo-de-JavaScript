const url = 'https://dummyjson.com/user';

const loadingElement = document.querySelector('#loading');
const titulo = document.querySelector('h1');

// Elementos de exibição da página
const nomeElement = document.querySelector('#nome-user');
const emailElement = document.querySelector('#email-user');
const telefoneElement = document.querySelector('#telefone-user');
const containerUsers = document.querySelector('.lista-users');

const usersParamsUrl = new URLSearchParams(window.location.search);
const userId = usersParamsUrl.get('id'); // Obtém o valor do parâmetro 'id' da URL


async function getAllUsers() {
    const response = await fetch(url);
    const dados = await response.json();
    
    let usuarios = dados.users;
   
    if(response.ok){
        loadingElement.innerText = 'Lista de usuários:';
        console.log('Conectado com sucesso!');
       usuarios.map((id) =>{

            const divUser = document.querySelector('.user');
            const nome = document.createElement('h2');
            const email = document.createElement('p');
            const telefone = document.createElement('p');
            
            nome.innerText = id.firstName;
            email.innerText = id.email;
            telefone.innerText = id.phone;
            
            divUser.appendChild(nome);
            divUser.appendChild(email);
            divUser.appendChild(telefone);
            

            containerUsers.appendChild(divUser);
       });
    }else{
        console.log('Erro ao conectar!');
    }
}
