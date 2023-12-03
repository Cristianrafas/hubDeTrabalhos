const myAge = 25
document.write(`Minha idade é ${myAge} anos <br/>`)

const value1 = 34
const value2 = 40
const totalValue = value1 + value2
document.write(`O resultado da soma de ${value1} e ${value2} é ${totalValue} <br/>`)


const total = 200.50
const parcelas = 24
const valorParcela = total / parcelas
document.write(`O valor total da compra foi R$${total.toFixed(2).replace('.', ',')}  <br/>`)
document.write(`Forma de pagamente: ${parcelas}x de R$${valorParcela.toFixed(2).toString().replace('.', ',')}<br/>`)

const min = 120
const seg = 60 * min
document.write(`${min} minutos equivale à ${seg}!<br/>`)

const n4me = "Cristian"
const nota1 = 10
const nota2 = 5
const nota3 = 7
const media = (nota1 + nota2 + nota3) / 3
document.write(`O aluno ${n4me} ficou com a média ${media.toFixed(1).replace('.' , ',')} <br/>`)

let a = 10;
let b = 20;
const c = a

a = b
b = c

document.write(`A: ${a} B: ${b} <br/>`)

const votosTotal = Number(prompt('Total de voltos: '))
const votosBranco = Number(prompt('Total de votos em Branco: '))
const votosNulo = Number(prompt("total de votos nulos: "))

const brancoPerCent = (votosBranco/votosTotal) * 100
const nuloPerCent = (votosNulo/votosTotal) * 100
const votosValidos = ((votosTotal - (votosNulo + votosBranco)) / votosTotal) * 100
document.write(`Percentual de votos validos é ${votosValidos.toFixed(2)}%, percentual de votos nulos é 
${nuloPerCent.toFixed(2)}% e o percentual de votos brancos é 
${brancoPerCent.toFixed(2)}% <br/>`)

const valor1 = 200
const valor2 = 150

if (valor1 === valor2) {
    document.write('Os valores são iguais <br/>1000')
} else if (valor1 > valor2) {
    document.write('Primeiro valor é maior <br/>')
}   else { document.write('O segundo valor é maior!<br/>') }

const quantidade = 20
if (quantidade >= 12){
    document.write(`O valor pago foi R$
    ${(quantidade*0.25).toFixed(2).replace('.', ',')}<br/>`)
} else {
    document.write(`O valor pago foi R$
    ${(quantidade*0.30).toFixed(2).replace('.', ',')}<br/>`)
}

const nome = 'Cristian'
const age = 25

document.write(`Nome: ${nome} <br/>  Idade: ${age} <br/> 
Ano que nasceu: ${2023 - age} <br/>`)

const value3 = 5

if (value3 % 2 === 0){
    document.write(`O numero ${value3} é par <br/>`)
} else {
    document.write(`O numero ${value3} é impar <br/>`)
}

const anoAtual = new Date().getFullYear()
const anoNascimento = 1998
if ((anoAtual - anoNascimento) >= 16){
    document.write(`Você pode votar este Ano! <br/>`)
} else {`Você não pode votar este Ano! <br/>`}
