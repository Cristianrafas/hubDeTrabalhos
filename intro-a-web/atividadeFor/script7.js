document.addEventListener("DOMContentLoaded", function() {
let negative = 0;
let positive = 0;
let media = 0;
let quantidade = 10

for (let i = 1; i <= quantidade; i++) {
    let number = Number(prompt(`Digite um número:`)) 
    media += number;
    if (number < 0) {
        negative++;
    } else {
        positive++;
    }
}
let valMedia = (`${media / quantidade}.<br>`);
let quantPositive = (`${positive} números. <br>`)
let quantNegative = (`${negative} números. <br>`);
let posiPercent = (`${positive*10}% dos números. <br>`)
let negaPercent = (`${negative*10}% dos números.`)

let showMedia = document.getElementById('a');
let showPositive = document.getElementById('b');
let showNegative = document.getElementById('c');
let showPositvePercent = document.getElementById('d');
let showNegativePercent = document.getElementById('e');

showMedia.innerHTML = valMedia;
showNegative.innerHTML = quantNegative;
showPositive.innerHTML = quantPositive;
showPositvePercent.innerHTML = posiPercent;
showNegativePercent.innerHTML = negaPercent;

});