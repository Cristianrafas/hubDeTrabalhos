let gCelsius = Number(prompt('digite um valor em graus Celsius'));
let calc1 = gCelsius * 9 + 160;
let fharenheit = calc1 / 5;

document.write(`A temperatura em graus fharenheit é:  ${fharenheit} <br>`);

let num1 = Number(prompt('Digite um número de 1 a 7: '));
let dSemana;

switch(num1) {
    case 1:
        dSemana = 'Domingo';
        break;
    case 2:
        dSemana = 'Segunda';
        break; 
    case 3:
        dSemana = 'Terça';
        break;
    case 4:
        dSemana = 'Quarta';
        break;
    case 5:
        dSemana = 'Quinta';
        break;
    case 6:
        dSemana = 'Sexta';
        break;
    case 7:
        dSemana = 'Sabado';
        break;
    default:
        document.write('Digite um número válido!');
        break;
}
if (num1 >= 1 && num1 <= 7) {
document.write(`O dia da semana correspondente ao número:  ${num1} é ${dSemana} <br>`);
}

const num2 = Number(prompt('Digite um número: '));

if (num2 > 0) {
    document.write(`O número digitado é positivo <br>`)
} else if (num2 == 0) {
    document.write(`O número digitado é zero <br>`)
}
else { 
    document.write(`O número digitado é negativo <br>`) }

    const custoDeFabrica = Number(prompt('Digite o valor de fabrica do carro:'))
    const impostoDeFabrica = custoDeFabrica /100 * 45;
    const distribuidor = custoDeFabrica / 100 * 28;
    const custoDoCarro = custoDeFabrica + impostoDeFabrica + distribuidor;
    document.write(`O custo do carro é de R$ ${custoDoCarro.toFixed(2)} <br>`)

const height = Number(prompt('Digite sua altura: ').replace("," , "."));
const weight = Number(prompt('Digite seu peso: ').replace("," , "."));
const imc = weight / ( height* height);

if (imc >= 18.5 && imc <= 24.99){
    document.write(`Você esta dentro da faixa de peso ideal <br>`)
}
else if (imc <= 18.4) {
    document.write(`Você esta abaixo da faixa de peso ideal <br>`)
}
else { 
    document.write(`Voce está acima errado 5,da faixa de peso ideal <br>`)
}

const numb1 = Number(prompt('Digite o primeiro número: '))
const numb2 = Number(prompt('Digite o segundo número: '))
const operator = prompt('Digite um operador: ')
let result


if (operator == "+"){
	result = numb1 + numb2
    document.write(`O resultado de ${numb1} ${operator} ${numb2} é ${result} <br>`)
} else if (operator == "-") {
	result = numb1 - numb2
    document.write(`O resultado de ${numb1} ${operator} ${numb2} é ${result} <br>`)
} else if (operator == "*") {
	result = (numb1 * numb2).toFixed(2)
    document.write(`O resultado de ${numb1} ${operator} ${numb2} é ${result} <br>`)
} else if (operator == "/") {
	result = (numb1 / numb2).toFixed(2)
    document.write(`O resultado de ${numb1} ${operator} ${numb2} é ${result} <br>`)
} else {document.write('Digite um operador válido <br>')}

let balance = 1000
let withdraw = Number(prompt('Digite o valor que queres sacar: '))
let result1 = (balance - withdraw - 4.5).toFixed(2)
if (withdraw > 0 && withdraw %5 == 0) { 
    if (withdraw + 4.5 < balance) {
        document.write(`Saque efetuado com sucesso, seu novo saldo é de: ${result} <br>`)}
    else {
        document.write("saldo insuficiente <br>");
    }
} else { 
    document.write(`Digite um valor válido, positivo e multiplo de 5 <br>`);
}

const age = Number(prompt('Digite a sua idade: '))
const height1 = Number(prompt('Digite seu peso: '))

if (age < 12) {
    document.write(`Infantil <br>`);} 
else if (age >= 13 && age <= 16){
    if (height1 <= 40) {
        document.write(`Juvenil leve <br>`)} 
    else {document.write(`Juvenil pesado <br>`)} }
else if (age >= 17 && age <= 24) {
    if (height1 <= 45) {
        document.write(`Sênior leve <br>`)
    }
    else if (height1 > 45 && height1 <= 60)
    {document.write(`Sênior Médio <br>`)}
    else {document.write(`Sênior pesado <br>`)}}
else {document.write(`Veterano <br>`)}

const carVel = Number(prompt('Digite a velocidade do carro: '))
let valorMulta = (carVel - 80) * 5;
if (carVel > 80) {
    document.write(`velocidade acima da permitida! Você será multado em: R$${valorMulta}`)
}
else {document.write(`velocidade permitida`)}

