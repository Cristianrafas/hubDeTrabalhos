document.addEventListener("DOMContentLoaded", function() {
    let number = Number(prompt('Digite um valor: '))
    let contagem = '';

    for (let i = 0; i <= number; i++) {
    contagem += i + `, `;
}
    contagem += 'FIM!';
    console.log(contagem);
    let mostrarContagem = document.getElementById('a');

    mostrarContagem.innerHTML = contagem;
});