/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */

const rockPaperScissors = (
  player1: 'rock' | 'paper' | 'scissors', 
  player2: 'rock' | 'paper' | 'scissors'
): string => {
  if (player1 === player2) {
    return "Draw!";
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
// console.log(rockPaperScissors("scissors", "paper"));
// console.log(rockPaperScissors("scissors", "rock"));
// console.log(rockPaperScissors("paper", "paper"));