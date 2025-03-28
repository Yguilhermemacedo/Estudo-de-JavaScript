const usuarios = localStorage.getItem('usuario');

function salvar(){
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    if(usuarios){
        const usuariosArray = JSON.parse(usuarios);
        usuariosArray.push({nome, senha});
        localStorage.setItem('usuario', JSON.stringify(usuariosArray));
    }else{
        localStorage.setItem('usuario', JSON.stringify([{nome, senha}]));
    }

   
}

function logar(){
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    const usuariosArray = JSON.parse(usuarios);

    const usuario = usuariosArray.find(usuario => usuario.nome === nome && usuario.senha === senha);

    if(usuario){
        alert('Usuario logado com sucesso');
        window.location.href = './page.html'; // Corrigido o redirecionamento
    }else{
        alert('Usuario ou senha incorretos');
    }
}

