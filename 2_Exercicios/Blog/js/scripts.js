const url = `https://jsonplaceholder.typicode.com/posts`;

const loadingElement = document.querySelector('#loading');
const postsContainer = document.querySelector('#posts-container');

const postPage = document.querySelector('#post');
const postContainer = document.querySelector('#post-container');
const commentsContainer = document.querySelector('#comments-container');

const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get('id');

async function getAllPost (){
    const reponse = await fetch(url);
    console.log(reponse);

    const data = await reponse.json();
    console.log(data);

    loadingElement.classList.add('hide');
    data.map((post) =>{
        const div = document.createElement('div');
        const tittle = document.createElement('h2');
        const body = document.createElement('p');
        const link = document.createElement('a');

        tittle.innerText = post.title;
        body.innerText = post.body;
        link.innerText = 'Ver mais';
        link.setAttribute("href", `./post.html?id=${post.id}`);

        div.appendChild(tittle);
        div.appendChild(body);
        div.appendChild(link);

        postsContainer.appendChild(div);
    });
}

// Get individual post
async function getPost(id) {
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])
    
    const dataPost = await responsePost.json();
    const dataComments = await responseComments.json();

    loadingElement.classList.add('hide');
    postPage.classList.remove('hide');

    const tittle = document.createElement('h2');
    const body = document.createElement('p');
    
    tittle.innerText = dataPost.title;
    body.innerText = dataPost.body;

    postContainer.appendChild(tittle);
    postContainer.appendChild(body);

    dataComments.map((comment) =>{
        createComment(comment);
    })

    function createComment(comment){
        const div = document.createElement('div');
        const email = document.createElement('h3');
        const commentBody = document.createElement('p');

        email.innerText = comment.email;
        body.innerText = comment.body;

        div.appendChild(email);
        div.appendChild(body);

        commentsContainer.appendChild(div); 

    }

}

if(!postId){
    getAllPost();
}else{
    getPost(postId);
}