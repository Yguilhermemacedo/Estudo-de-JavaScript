// Esta variável cria um elemento body
var body = document.querySelector("body");

// Esta variável cria somente um elemento h1
var tittle = document.createElement("h1");

// Esta variável cria um texto que está dentro do elemento h1
var textoTittle = document.createTextNode("Título");

// Esta mostra o texto dentro do elemento h1
body.appendChild(textoTittle);