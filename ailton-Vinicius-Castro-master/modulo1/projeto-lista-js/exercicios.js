// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt("qual é a altura do retangulo?")
const largura = prompt("qual é a largura do retangulo?")
const calculaAreaRetangulo = altura * largura
console.log(calculaAreaRetangulo)  
return(calculaAreaRetangulo)
// funcionando
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt("digite o ano atual")
const anoNascimento = prompt("digite o ano de nascimento")
const idadeAtual = anoAtual - anoNascimento
  console.log(idadeAtual)
  return(idadeAtual)
  // funcionando
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  console.log(imc)
  return(imc)
  // funcionando
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Qual o nome")
const idade = prompt("Qual a idade")
const email = prompt("Qual o email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)
return 

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cores = []
cores.push(prompt("Qual a sua primeira cor"))
cores.push(prompt("Qual a sua segunda cor"))
cores.push(prompt("Qual a sua terceira cor"))
console.log(cores)
 // funcionando
  }


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const palavra = string.toUpperCase()
  console.log(palavra)
  return palavra
 // funcionando
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
custo/valorIngresso
return custo/valorIngresso
 // funcionando

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const mesmotamanho = string1.length === string2.length
  return (mesmotamanho)
   // funcionando
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
// Eu não acho que seja só isso, acredito que tenha uma logica melhor para se apresentar
// funcionando
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[5]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}