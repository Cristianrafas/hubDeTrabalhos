document.addEventListener("DOMContentLoaded", function() {
    multiplo3 = "";
    multiplo5 = "";

for (let i = 1; i <= 250; i++){
    if (i % 3 == 0){
        multiplo3 += i + '  ';
    }    else if (i % 5 == 0){
        multiplo5 += i + '  ';
    }
}
let mostrar3 = document.getElementById('a')
let mostrar5 = document.getElementById('b')

mostrar3.innerHTML = multiplo3;
mostrar5.innerHTML = multiplo5;
});