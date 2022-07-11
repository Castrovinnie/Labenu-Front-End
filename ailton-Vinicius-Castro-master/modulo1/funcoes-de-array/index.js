// Exercícios de interpretação de código
// a) O que vai ser impresso no console?

// Será impresso uma "ficha" ou objeto com o nome e apelido de cada usuario.

// ----------------------------------------------------------------------------

//2. Leia o código abaixo

//   a) O que vai ser impresso no console?
// Será impresso apenas os nomes dos usuarios.

// ----------------------------------------------------------------------------

// 3.Leia o código abaixo

// a) O que vai ser impresso no console?
// será impresso apenas o apelido do usuario Letícia Chijo = Chijo

// ----------------------------------------------------------------------------

// Exercícios de escrita de código 

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// //  a) Crie um novo array que contenha apenas o nome dos doguinhos (concluido )
// const nomeDoguinhos = pets.map((pet) =>{
//     return pet.nome
// })

// console.log(nomeDoguinhos)

// ----------------------------------------------------------------------------

// b) Crie um novo array apenas com os cachorros salsicha (concluido)

// const trasSalsicha = pets.filter((raca) =>{
//     return raca.raca === "Salsicha"
// })

// console.log(trasSalsicha)

// ----------------------------------------------------------------------------

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. (IMCOMPLETO)
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
// const nome = Luiz
// const promoPoodle = (pet) => {
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a `pet`!"`)
//     return promoPoodle.raca === "Poodle"
   
// }

// console.log(promoPoodle)



// ----------------------------------------------------------------------------



// 2. Dado o seguinte array de produtos, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a) Crie um novo array que contenha apenas o nome de cada item

const nomeProduto = produtos.map () 
produtos.for

// ----------------------------------------------------------------------------

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
// aplicando 5% de desconto em todos eles



// ----------------------------------------------------------------------------

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas



// ----------------------------------------------------------------------------

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"



// ----------------------------------------------------------------------------

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"



// ----------------------------------------------------------------------------


// Desafios

//    Desafios
    // 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

    // const pokemons = [
    //     { nome: "Bulbasaur", tipo: "grama" },
    //     { nome: "Bellsprout", tipo: "grama" },
    //     { nome: "Charmander", tipo: "fogo" },
    //     { nome: "Vulpix", tipo: "fogo" },
    //     { nome: "Squirtle", tipo: "água" },
    //     { nome: "Psyduck", tipo: "água" },
    //  ]

    // a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética (conlcuido)
    // Pesquise sobre o método sort()
  
// pokemons.sort(function (x, y) {
//     let a = x.nome.toUpperCase();
//     let b = y.nome.toUpperCase();
//     return a == b ? 0 : a > b ? 1 : -1;

// });

// console.log(pokemons)

// objetos classificados por propriedade de string, fazendo a arrey pokemons
// sem distinção entre maiúsculas e minúsculas.

// ----------------------------------------------------------------------------


    // b) Crie um novo array apenas com os tipos dos pokémons, sem repetição 
    //  const pokemons = [
    //         { nome: "Bulbasaur", tipo: "grama" },
    //         { nome: "Bellsprout", tipo: "grama" },
    //         { nome: "Charmander", tipo: "fogo" },
    //         { nome: "Vulpix", tipo: "fogo" },
    //         { nome: "Squirtle", tipo: "água" },
    //         { nome: "Psyduck", tipo: "água" },
    //      ]
    //      const pokemon = pokemons.filter((a, i) => pokemon.indexOf(a) === i);
    //      console.log(pokemon); 
