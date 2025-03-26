// LocalStorage é um objeto que armazena dados no navegador do usuário

// 1 - Inserir um dado no LocalStorage
localStorage.setItem("nome", "Guilherme");

// 2 - Recuperar um dado do LocalStorage
const name = localStorage.getItem("nome");
console.log(name);

localStorage.removeItem("nome");
localStorage.clear();

localStorage.setItem("tarefa", "Estudar JS");