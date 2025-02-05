function verificarForm(){
    const nome = document.getElementById("nome").value;

    if(nome.trim() == ""){
        alert('Por favor preencha o campo.')
    }else{
        alert("Nome válidado!")
    }
}