// URL da API que fornece os posts e comentários
const url = `https://jsonplaceholder.typicode.com/posts`;

// Seleciona os elementos da página onde os posts e os comentários serão exibidos
const loadingElement = document.querySelector('#loading'); // Elemento de carregamento
const postsContainer = document.querySelector('#posts-container'); // Container de posts

// Seleciona os elementos da página de post individual
const postPage = document.querySelector('#post'); // Página do post individual
const postContainer = document.querySelector('#post-container'); // Container do post específico
const commentsContainer = document.querySelector('#comments-container'); // Container dos comentários

// Captura o ID do post na URL, caso exista
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get('id'); // Obtém o valor do parâmetro 'id' da URL

// Função assíncrona para buscar e exibir todos os posts
async function getAllPost () {
    // Faz a requisição GET para buscar todos os posts
    const response = await fetch(url);
    console.log(response); // Exibe a resposta no console

    const data = await response.json(); // Converte a resposta para JSON
    console.log(data); // Exibe os dados no console

    // Esconde o elemento de carregamento
    loadingElement.classList.add('hide');

    // Itera sobre cada post recebido
    data.map((post) => {
        // Cria elementos para exibir o post
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const body = document.createElement('p');
        const link = document.createElement('a');

        // Adiciona o conteúdo ao post
        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = 'Ver mais';
        link.setAttribute("href", `./post.html?id=${post.id}`); // Define o link para a página do post

        // Adiciona os elementos criados ao container do post
        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        // Adiciona o post ao container de posts
        postsContainer.appendChild(div);
    });
}

// Função assíncrona para buscar e exibir um post específico e seus comentários
async function getPost(id) {
    // Faz requisições simultâneas para obter o post e seus comentários
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`), // Busca os dados do post pelo ID
        fetch(`${url}/${id}/comments`) // Busca os comentários do post
    ]);
    
    // Converte as respostas para JSON
    const dataPost = await responsePost.json();
    const dataComments = await responseComments.json();

    // Esconde o elemento de carregamento e exibe a página do post
    loadingElement.classList.add('hide');
    postPage.classList.remove('hide');

    // Cria elementos para exibir o post
    const title = document.createElement('h2');
    const body = document.createElement('p');
    
    // Adiciona o conteúdo do post
    title.innerText = dataPost.title;
    body.innerText = dataPost.body;

    // Adiciona os elementos do post ao container
    postContainer.appendChild(title);
    postContainer.appendChild(body);

    // Itera sobre os comentários e os exibe
    dataComments.map((comment) => {
        createComment(comment); // Chama a função para criar e exibir o comentário
    });

    // Função para criar e exibir um comentário
    function createComment(comment) {
        const div = document.createElement('div');
        const email = document.createElement('h3');
        const commentBody = document.createElement('p');

        email.innerText = comment.email;
        commentBody.innerText = comment.body; // Correção: usar `commentBody` ao invés de `body`

        // Adiciona os elementos ao container do comentário
        div.appendChild(email);
        div.appendChild(commentBody);

        // Adiciona o comentário ao container de comentários
        commentsContainer.appendChild(div); 
    }
}

// Verifica se há um ID na URL
if (!postId) {
    getAllPost(); // Se não houver ID, carrega todos os posts
} else {
    getPost(postId); // Se houver ID, carrega um post específico e seus comentários
}
