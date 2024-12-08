window.addEventListener("DOMContentLoaded", (event) => {
  console.log("GAME READY");
}); 

setTimeout(() => {
  console.log("MADE WITH LOVE BY JORDY VEENSTRA.");
}, 1200);

let playerChoice;

let rock = document.getElementById("rock").addEventListener("click", function () {
  playerChoice = "rock";
  console.log("PLAYER HAS CHOSEN ROCK");
  document.getElementById("choiceOne").innerHTML = "rock";
  setCPU();
});

let paper = document.getElementById("paper").addEventListener("click", function () {
  playerChoice = "paper";
  console.log("PLAYER HAS CHOSEN PAPER");
  document.getElementById("choiceOne").innerHTML = "paper";
  setCPU();
});

let scissors = document.getElementById("scissors").addEventListener("click", function () {
  playerChoice = "scissors";
  console.log("PLAYER HAS CHOSEN SCISSORS");
  document.getElementById("choiceOne").innerHTML = "scissors";
  setCPU();
});

let cpuChoice;

setCPU = () => {
  console.log("COMPUTER IS MAKING A CHOICE. PLEASE WAIT.");
  let cpuRNG = Math.floor(Math.random() * 3 + 1);
  cpuChoice = cpuRNG === 1 ? "rock" : cpuRNG === 2 ? "paper" : "scissors";
  console.log(`COMPUTER CHOSE ${cpuChoice.toUpperCase()}`);
  document.getElementById("choiceTwo").innerHTML = `${cpuChoice}`;
  setResult();
};

setResult = () => {
  let verbOne = "wraps";
  let verbTwo = "cuts";
  let verbThree = "smashes";
  let playerWin;

  if (playerChoice === cpuChoice) {
    document.getElementById("finalResult").innerHTML = "...Guess what?";
    document.getElementById("outcome").innerHTML = "It's a tie!";
  } else if (playerChoice === "rock" && cpuChoice === "paper") {
    document.getElementById("finalResult").innerHTML = `${cpuChoice} ${verbOne} ${playerChoice}.`;
    document.getElementById("outcome").innerHTML = "The Computer Wins.";
  } else if (playerChoice === "paper" && cpuChoice === "scissors") {
    document.getElementById("finalResult").innerHTML = `${cpuChoice} ${verbTwo} ${playerChoice}.`;
    document.getElementById("outcome").innerHTML = "The Computer Wins.";
  } else if (playerChoice === "scissors" && cpuChoice === "rock") {
    document.getElementById("finalResult").innerHTML = `${cpuChoice} ${verbThree} ${playerChoice}.`;
    document.getElementById("outcome").innerHTML = "The Computer Wins.";
  } else {
    document.getElementById("outcome").innerHTML = "A worthy player!";
    if (playerChoice === "rock") {
      playerWin = verbThree;
    } else if (playerChoice === "paper") {
      playerWin = verbOne;
    } else {
      playerWin = verbTwo;
    }
    document.getElementById("finalResult").innerHTML = `${playerChoice} ${playerWin} ${cpuChoice}.`;
  }
};
