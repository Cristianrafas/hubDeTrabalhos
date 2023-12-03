document.addEventListener("DOMContentLoaded", function() {
    let limite = 30;
    let contagem = '';

    for (let i = limite ; i > 1; i--) {
        let primo = true;
        
        for (let divisor = 2 ; divisor < i; divisor ++){
            if (i % divisor == 0){
                primo = false;
                break;
            }
        }
        if (primo) 
        {contagem += `[${i}] `;} 
        else 
        {contagem += `${i} `;}
    }
    contagem += '1'
    let mostrarContagem = document.getElementById('a');
    mostrarContagem.innerHTML = contagem;
});