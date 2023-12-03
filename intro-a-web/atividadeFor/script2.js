document.addEventListener("DOMContentLoaded", function() {
let pedroH = 150;
let lucasH = 110;
let years = 0;

for (let i = 0; pedroH > lucasH; i++) {
    pedroH += 2
    lucasH += 3
    years += 1}
var anosIgual = document.getElementById('a');
var anosMaior = document.getElementById('b');

anosIgual.innerHTML = years;
anosMaior.innerHTML = years + 1;
});

