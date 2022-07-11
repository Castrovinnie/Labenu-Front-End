// let i = 0
// while (i <10){
// console.log(i)
// i++

// }


// let numeroUsuario = +prompt("digite um numero")
// const numerosDigitados = []
// numeroUsuario.push(numeroUsuario)
// while(numeroUsuario !== 0) {
    
//     numeroUsuario = +prompt("digite um numero")
    
//     numeroUsuario.push(numeroUsuario)

// }

// let numeroUsuario = +prompt("Digite um numero:")
// const numerosDigitados = []

// while (numeroUsuario !== 0) {
//   numeroUsuario = +prompt("Digite um numero:")

//   numerosDigitados.push(numeroUsuario)
// }

// // console.log(numerosDigitados)


// let soma = 0
// while(contador < numerosDigitados.length){
//     soma = numerosDigitados[contador] 

//      contador++
// }
// console.log(soma)

// for(let contador = 0; contador; contador < numerosDigitados.length; contador++){
//     soma = soma +numerosDigitados[contador]
// }


// const maior = (arr) => {
//     let maior = 0
  
//     for(let i = 0; i < arr.length; i++) {
//       const elemento = arr[i]
//       if (elemento > maior) {
//         maior = elemento
//       }
//     }
  
//     console.log(maior)
//   }
  
//   maior([11, 15, 18, 14, 12, 13])
  
// const juntaPalavras = (arr) =>
// let frase = ""
// for(let palavra of arr) {

//     frase = frase + " "
//     frase = frase + palavra
// }
// console.log(frase)

// juntaPalavras(["oi", "tudo bem"])


// while: Realiza uma ação até que a condição dentro dos 
// seus parênteses se tornar falsa

// for: Usado para realizar loops cujas condições estejam 
// diretamente relacionadas a números e a um 
// incremento fixo

// for... of... : Permite percorrer os elementos de um array 
// de uma forma bem mais simples de se ler



// -----------------------------------------------------------------
// Exercícios de interpretação de código
// 1.O que o código abaixo está fazendo? Qual o resultado 
// impresso no console?

// ele esta executando um comando for para atribuir e somar os valores
//   fazendo assim 5 execuções do loop até não ser menor que 5
// chegando ao valor 10

// -----------------------------------------------------------------

//2. Leia o código abaixo:

// a) O que vai ser impresso no console?

// 19
// 21
// 23
// 25
// 27
// 30

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
//  o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Pode se criar um novo array para determinar o incice completo de cada elemento.

// -----------------------------------------------------------------

// 3.Qual seria o resultado impresso no console, se o usuário digitasse o número 4

// O codigo imprime a quantidade de linhas digitadas no quantidadeTotal, com o caracter " * " somados em cada linha como exemplo:
// linha 1 *
// linha 2 **
// linha 3 ****
// linha 4 ****   

// -----------------------------------------------------------------

// 1. Concluido

//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// let quantidadeBichinhos = prompt("Quantos bichinhos de estimação você tem ?")
// let nomeBichinhos = []
// if (quantidadeBichinhos == 0) {
// console.log("Que pena! Você pode adotar um pet!")
// }
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
//  um por um, e guarde esses nomes em um array
// else {
    // for (let i =0; i < quantidadeBichinhos; i++ ){
// nomeBichinhos.push(prompt("Qual o nome do seu(s) pet(s)"))
    // }
    // c) Por fim, imprima o array com os nomes dos bichinhos no console
// console.log(nomeBichinhos)
// }    
    
// -----------------------------------------------------------------

// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
    // a) Escreva um programa que **imprime** cada um dos valores do array original.
    const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    console.log(arrayOriginal)   
    // b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    for (let valor of arrayOriginal){
        console.log(valor/10) 
    }
    // c) Escreva um programa que **crie** um novo array contendo, somente, os números 
    // pares do array original e **imprima** esse novo array
    const numPar = ()
    let arrPar = []
        if (arrayOriginal)

    // d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
    // e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

    // -----------------------------------------------------------------

    // -----------------------------------------------------------------

    // -----------------------------------------------------------------