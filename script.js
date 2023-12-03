function loadNewContent(content) {
    // Cria um objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    // Define a função a ser chamada quando a resposta estiver pronta
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Atualiza o conteúdo da div com a resposta do servidor
            document.getElementById("main-content").innerHTML = this.responseText;
        }
    };

    // Especifica o tipo de requisição, o arquivo a ser carregado e se a requisição deve ser assíncrona
    xhttp.open("GET", `${content}.html`, true);

    // Envia a requisição ao servidor
    xhttp.send();
}