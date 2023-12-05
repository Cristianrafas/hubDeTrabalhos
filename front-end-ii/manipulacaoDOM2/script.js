
    let textCards = document.querySelectorAll('.titulo-card');

    textCards.forEach(function(textCard) {
        textCard.innerHTML = 'Meu Card';
    });

    let descrocaoCard = document.querySelectorAll(".descricao-card");
    descrocaoCard.forEach(function(textCard) {
        textCard.style.margin = '30px';
        textCard.innerHTML = 'Descrição modificada pelo Javascript';
    });

    let botaoEditar = document.querySelectorAll(".botao-editar")
    botaoEditar.forEach(function(botton) {
        botton.style.backgroundColor = 'green';
        botton.style.borderRadius = '10px';
        botton.style.padding = '5px';
    });

    let botaoApagar = document.querySelectorAll(".botao-apagar")
    botaoApagar.forEach(function(botton) {
        botton.style.backgroundColor = 'red';
        botton.style.borderRadius = '10px';
        botton.style.padding = '5px';
    });

    function editarCard(card){
        text = prompt('Digite a nova descrição do card')
        document.getElementById(card.id).innerHTML = text;
    }

    function apagarCard(card){
        document.getElementById(card.id).innerHTML = "";
    }