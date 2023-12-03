
const btn = document.querySelector('#button');
btn.addEventListener("click", function() {
    let withdraw = document.querySelector("#input");
    let value = withdraw.value
    let one = 0;
    let five = 0;
    let ten = 0;
    let fifty = 0;

    for (value; value >= 50; value -= 50) {
    fifty++;}

    for (value; value >= 10; value -= 10) {
    ten++;}

    for (value; value >= 5; value -= 5) {
    five++;}

    for (value; value >= 1; value--){
    one++;}
    
    let displayOne = document.getElementById('var1');
    displayOne.innerHTML = one;
    let displayFive = document.getElementById('var2');
    displayFive.innerHTML = five;
    let displayTen = document.getElementById('var3');
    displayTen.innerHTML = ten;
    let displayFifty = document.getElementById('var4');
    displayFifty.innerHTML = fifty;
    });
    
