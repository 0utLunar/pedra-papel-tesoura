let humanScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
  const choices = ["pedra", "papel", "tesoura"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {

    return prompt("Escollha pedra, papel ou tesoura!").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  
    if (humanChoice == computerChoice) {
        console.log("Isto é um empate! ambos escolheram " + humanChoice + "!")
    }
    else if (
    (humanChoice === "pedra" && computerChoice === "tesoura") ||
    (humanChoice === "tesoura" && computerChoice === "papel") ||
    (humanChoice === "papel" && computerChoice === "pedra")
    ) {
    humanScore++;
    console.log("Você ganhou! "+ humanChoice + " vence " + computerChoice + "!");
    console.log("O placar está: Humano = "+ humanScore + " / Computador =  " + computerScore);
    } 
    else {
    computerScore++;
    console.log("Você perdeu! "+ computerChoice + " vence " + humanChoice + "!");
    console.log("O placar está: Humano = "+ humanScore + " / Computador =  " + computerScore);
    }
}



console.log("Bem Vindo ao jogo de Pedra, Papel e Tesoura!")

while (round <= 5) {

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
round++;
}

if (computerScore < humanScore) {
    console.log("O Humano ganhou!")
} else if (humanScore < computerScore) {
    console.log("O Computador ganhou!")
}
else {
    console.log("Foi um empate!")
}