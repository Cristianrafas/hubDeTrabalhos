document.addEventListener("DOMContentLoaded", function() {

let menor = 10;
let maior = 0;

for (let i = 1; i <= 15; i++) {
    let altura = Number(prompt(`Digite a altura número: ${i}`));
    if (altura > maior) {
        maior = altura;
    } else if (altura < menor){
        menor = altura;
    }
}
var mostrarMenor = document.getElementById('a');
var mostrarMaior = document.getElementById('b');

mostrarMenor.innerHTML = menor;
mostrarMaior.innerHTML = maior;});