// Exercícios de interpretação de código

// 1. 

// Resultado: False 
// Resultado: False 
// Resultado: True 
// Resultado: boolean

// 2.
    // Codigo Original

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

    // console.log(soma)

// imprime uma sequencia dos dois numeros digitados, exemplo primeironumero for 10 e o 
// segundonumero for 10 imprime 1010 e não a soma.

// 3.   

// *Codigo com a resposta "correta"*

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// Ao adicionar Number eu declaro que agora estou efetuando
//  a soma de numeros e não de textos, agora apresentando a soma 10 + 10 = 20 
// e não mais a junção 1010

// <----------------Exercícios de escrita de código---------------->

// <----------------1---------------->

// let idade= Number(prompt("Qual a sua idade?"))
// let idadeamigo = Number(prompt("Qual a idade do seu amigo/a ?"))
// const maioroumenor = idade >= idadeamigo
// console.log(maioroumenor)
// const difencaidade = idade - idadeamigo
// console.log(difencaidade)

// <----------------2---------------->

// let numeropar = Number(prompt("Insira um numero par:"))
// console.log(numeropar % 2)

// O padrão é que o programa sempre me traz o numero ZERO


//  Ao colocar um numero impar sempre retorna o numero UM

// <----------------3---------------->

// let idadeAnos = Number(prompt("Qual a sua idade ?"))
// console.log("Idade em anos é", idadeAnos)
// let idadeMeses = Number(idadeAnos * 12)
// console.log("a idade em meses é", idadeMeses)
// let idadeDias = Number(365 * idadeAnos)
// console.log("a idade em dias é", idadeDias)
// let idadeHoras = Number(24 * 365 * idadeAnos)
// console.log("a idade em horas é", idadeHoras)

// Não estou conseguindo por exemplo colocar todas informações em uma linha unica

// <----------------4---------------->

// let numeroUm = Number(prompt("Escreva um numero"))
// let numeroDois = Number(prompt("Escreva outro numero"))
// const resultado1 = numeroUm > numeroDois
// const resultado2 = numeroUm === numeroDois
// const resultado3 = (numeroUm % numeroDois) === 0
// const resultado4 = (numeroDois % numeroUm) === 0
// console.log(resultado1, resultado2, resultado3, resultado4 ) 

// <----------------DESAFIO---------------->

// <----------------1---------------->

// 
// const tempC = Number(prompt("Digite uma temperatura" tempC * 9/5 + 32))
// const tempK = Number(prompt(tempF - 32)*(5/9) + 273.15
// const tempF = Number(Pronpt) (tempC)*(9/5) +32
// const tempC = 80
// console.log()
// const celsius = Number(prompt("digite uma temperatura"))

// <----------------a---------------->
// fahrenheit para Kelvin
// let fahrenheit = Number(prompt("Digite uma temperatura em fahrenheit"))
// const kelvin = ( fahrenheit - 32)*(5/9) + 273.15
// console.log("temperatura em kelvin:", kelvin)

// <----------------b---------------->
// Celsius para Fahrenheit 
// let celsius = Number(prompt("Digite uma temperatura em celsius"))
// const fahrenheit = celsius *(9/5) + 32
// console.log("temperatura em fahrenheit:", fahrenheit)


// <----------------c---------------->
// Celsius para Fahrenheit e Kelvin

// let celsius = Number(prompt("Digite uma temperatura em celsius"))
// const fahrenheit = celsius *(9/5) + 32
// const kelvin = ( fahrenheit - 32)*(5/9) + 273.15
// console.log("temperatura em fahrenheit:", fahrenheit)
// console.log("temperatura em kelvin:", kelvin)

// <----------------d---------------->

// **o Meu codigo ja permite que o usuario possa colocar o numero manualmente para ser convertido**

// <----------------2---------------->

// <----------------a---------------->
let consumo = Number(prompt("Digite o consumo em quilowatt:"))
let QuilowattHora = 0.05
const totalContaLuz = QuilowattHora * consumo 
console.log("o valor a ser pago é",totalContaLuz)

// <----------------b---------------->


