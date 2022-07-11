//1. Exercícios de interpretação de código

// a) O que vai ser impresso no console?

// Será impresso 

// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}

// 2.Leia o código abaixo
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?

// nome: 'Juca', idade: 3, raca: 'SRD'
// nome: 'Juba', idade: 3, raca: 'SRD'
// nome: 'Jubo', idade: 3, raca: 'SRD

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// os tres pontos faz a "clonagem" da informação da const cachorro() e tras para const gato e const tartaruga.

// 3.Leia o código abaixo

// a) O que vai ser impresso no console?
// false
// indefinido

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// False ja esta declarado dentro da const pessoa = 
// no caso altura nao esta declaro.

// Exercícios de escrita de código**
// 1. Resolva os passos a seguir: 
        
//         a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
// 		(um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função 
// 		que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

// Exemplo de entrada
// const pessoa = {
// 	nome: "Mariana", 
// 	apelidos: ["Mari", "Ma", "Marianinha"]
//  }
//  console.log(`Eu sou ${pessoa.nome} mas pode me chamar de: ${pessoa.apelidos[0]}
//   ${pessoa.apelidos[1]} ${pessoa.apelidos[2]}`)
 // Exemplo de saída
//  "Eu sou Mariana, mas pode me chamar de: Mari, Ma ou Marianinha"

// Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova 
// lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const pessoa = {
//     nome: "Mariana",
//     apelido: ["Mari", "Ma", "Ana"],
//     }

// pessoa.novosapelidos = ["Hervilhinha", "MariMari", "Ana Banana"];

// console.log(`Eu sou a ${pessoa.nome}.
// mas pode me chamar de: ${pessoa.novosapelidos[0]}, ${pessoa.novosapelidos[1]},
// ${pessoa.novosapelidos[2]}`)

// 2.Resolva os passos a seguir: 
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// Exercício2

// const funcionario1 = {
// 	nome: "Lucas",
// 	idade: 25,
// 	profissao: "Veterinario",
//    }
//    const funcionario2 = {
// 	nome: "Vinicius"
// 	idade: 29
// 	profissao: "agente de viagens",
//    }

//    function BoasVindas (Obj) {
// 	const array = Obj;
// 	console.log (`boas vindas aos novos funcionarios`, ${array.nome.length}, ${array.idade}, "${array.profissao}", ${array.profissao.length}])

// 	// return ()
// }

//    BoasVindas (funcionario1)
//    BoasVindas (funcionario2)

// const colaborador = {
// nome: 'Lucas',
// idade: 22,
// profissao: 'Veterinario'
// }

// const colaborador2 = {
// nome: 'Cristiano',
// idade: 38,
// profissao: 'Analista Financeiro'
// }
// // console.log(colaborador.nome)

// function boasVindas(obj){
// console.log(`Boas vindas, ${obj.nome}`)
// }

// boasVindas(colaborador)
// boasVindas(colaborador2)

// // 3. Resolva os passos a seguir: 
    
// let carrinho = []
// const fruta1 = {
// 	nome: 'Banana',
// 	disponibilidade: true
// }
// const fruta2 = {
// 	nome: 'Uva',
// 	disponibilidade: true
// }
// const fruta3 = {
// 	nome: 'Kiwi',
// 	disponibilidade: false
// }
// function addSacolao(obj) {
// carrinho.push(obj);
// }
// addSacolao(fruta1);
// addSacolao(fruta2);
// addSacolao(fruta3);

// console.log(carrinho)

// Desafio

// Exemplo de entrada: "Lais", 26, "Instrutora"
// O que deve ser impresso no console: 
{ nome: 'Lais', profissao: "Instrutora", idade: 26}


const pessoa = {
    nome: prompt("Qual o seu nome?"),
    profissao: prompt("Qual a sua profissão?"),
    idade: prompt("Qual a sua idade?"),


}


// pessoa.novosapelidos = ["Hervilhinha", "MariMari", "Ana Banana"];

// console.log(`Eu sou a ${pessoa.nome}.
// mas pode me chamar de: ${pessoa.novosapelidos[0]}, ${pessoa.novosapelidos[1]},
// ${pessoa.novosapelidos[2]}`)