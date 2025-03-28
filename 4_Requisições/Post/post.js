fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Meu Post",
      body: "Conteúdo do post",
      userId: 1
    })
  })
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => console.log("Post criado:", data)) // Mostra o resultado
    .catch(error => console.error("Erro:", error));
  