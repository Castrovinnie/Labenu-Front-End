// 1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".
console.log("Que tal jogar uma partida de Blackjack");
// 2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
if(confirm("Quer jogar agora!? ( ͡~ ͜ʖ ͡°)")) {
	// o que fazer se o usuário clicar "ok"
    console.log("Excelente escolha")
} else {
	// o que fazer se o usuário clicar "cancelar"
    console.log("Te vejo por ai!")
}

// 5 - Nós preparamos um método que permite sortear uma carta. Ele já está pronto e você só precisa invocá-lo. Cada carta sorteada é um objeto com duas propriedades:
//  um texto que representa o que é escrito na carta; e um valor que mostra a pontuação da carta. 
const carta1Player = comprarCarta();
const carta2Player = comprarCarta();
const carta1Npc = comprarCarta();
const carta2Npc = comprarCarta();

const scorePlayer = carta1Player.valor + carta2Player.valor;
const scoreNpc = carta1Npc.valor + carta2Npc.valor;
// 6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo
console.log(`Player - cartas: ${carta1Player.texto} ${carta2Player.texto} - ${scorePlayer}`);
console.log(`Npc - cartas: ${carta1Npc.texto} ${carta2Npc.texto} - ${scoreNpc}`);
// .texto e .valor esta sendo puxado do arquivo nãoMexer.js

// 7 - Além disso, deve indicar o vencedor ou um empate
if (scorePlayer > scoreNpc) {
  console.log("Você Ganhou! ( ͠° ͟ʖ ͡°) ");
} else if (scoreNpc > scorePlayer) {
  console.log("Seu noob, computador ganhou!  [̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅] ");
} else if (scorePlayerUsuario === scoreNpc) {
  console.log("Empatou");
} else {
  console.log("Fim do jogo");
}

