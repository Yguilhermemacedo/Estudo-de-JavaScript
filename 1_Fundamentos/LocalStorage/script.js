function salvar() {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    
    let usuarios = JSON.parse(localStorage.getItem('usuario')) || [];
    usuarios.push({ nome, senha });
    localStorage.setItem('usuario', JSON.stringify(usuarios));
}

function logar() {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuario')) || [];
    const usuario = usuarios.find(u => u.nome === nome && u.senha === senha);

    if (usuario) {
        alert('Usuário logado com sucesso');
        window.location.href = './page.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
}

function mostrarDados() {
    const usuarios = JSON.parse(localStorage.getItem('usuario')) || [];
    usuarios.forEach(usuario => {
        const item = document.createElement('li');
        item.innerText = `Nome: ${usuario.nome}`;
        document.getElementById('dados').appendChild(item);
    });
}

function saudacaoUsuario() {
    const usuarios = JSON.parse(localStorage.getItem('usuario')) || [];
    const ultimoUsuario = usuarios[usuarios.length - 1];
    if (ultimoUsuario) {
        document.getElementById('saudacao').innerText = `Olá ${ultimoUsuario.nome}, seja bem-vindo(a)`;
    }
}

function sair() {
    localStorage.removeItem('usuario');
    window.location.href = './login.html';
}

mostrarDados();
saudacaoUsuario();
