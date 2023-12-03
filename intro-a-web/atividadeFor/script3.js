document.addEventListener("DOMContentLoaded", function() {
let n = Number(prompt(`Digite um número para saber a taboada: `));
let i = Number(prompt(`Digite até quantas X você quer saber: `));
let result = ""

for (let c = 1;c <= i; c++) {
    let now = `${n} x ${c} = ${n * c} <br>`;
    result += now + `   `;
}
let mostrarResult = document.getElementById(`a`);

mostrarResult.innerHTML = result;
});