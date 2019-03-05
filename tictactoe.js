const readline = require("readline");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask question
const ask = questionText => {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
};

let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let currentPlayer = "X";
let winner = "";

const grid = gridValues => {
  return (
    "\n" +
    " " +
    gridValues[1] +
    " | " +
    gridValues[2] +
    " | " +
    gridValues[3] +
    "\n--- --- ---\n" +
    " " +
    gridValues[4] +
    " | " +
    gridValues[5] +
    " | " +
    gridValues[6] +
    "\n--- --- ---\n" +
    " " +
    gridValues[7] +
    " | " +
    gridValues[8] +
    " | " +
    gridValues[9] +
    "\n\n" +
    "Player " +
    currentPlayer +
    "'s turn\n" +
    "Move to?\n"
  );
};

start();

async function start() {
  let prompt = "start";
  let spotTaken = false;

  while (prompt.toLowerCase() !== "exit") {
    if (spotTaken) {
      prompt = await ask(
        "\nSorry spot is already taken, try again!! \n\n" + grid(values)
      );
    } else {
      prompt = await ask(grid(values));
    }

    spotTaken = false;
    if (prompt === "1" && values[1] === 1) {
      values[1] = currentPlayer;
    } else if (prompt === "2" && values[2] === 2) {
      values[2] = currentPlayer;
    } else if (prompt === "3" && values[3] === 3) {
      values[3] = currentPlayer;
    } else if (prompt === "4" && values[4] === 4) {
      values[4] = currentPlayer;
    } else if (prompt === "5" && values[5] === 5) {
      values[5] = currentPlayer;
    } else if (prompt === "6" && values[6] === 6) {
      values[6] = currentPlayer;
    } else if (prompt === "7" && values[7] === 7) {
      values[7] = currentPlayer;
    } else if (prompt === "8" && values[8] === 8) {
      values[8] = currentPlayer;
    } else if (prompt === "9" && values[9] === 9) {
      values[9] = currentPlayer;
    } else {
      spotTaken = true;
    }

    if (
      (values[1] === "X" && values[2] === "X" && values[3] === "X") ||
      (values[4] === "X" && values[5] === "X" && values[6] === "X") ||
      (values[7] === "X" && values[8] === "X" && values[9] === "X") ||
      (values[1] === "X" && values[4] === "X" && values[7] === "X") ||
      (values[2] === "X" && values[5] === "X" && values[8] === "X") ||
      (values[3] === "X" && values[6] === "X" && values[9] === "X") ||
      (values[1] === "X" && values[5] === "X" && values[9] === "X") ||
      (values[3] === "X" && values[5] === "X" && values[7] === "X")
    ) {
      winner = "X";
      prompt = "exit";
    } else if (
      (values[1] === "O" && values[2] === "O" && values[3] === "O") ||
      (values[4] === "O" && values[5] === "O" && values[6] === "O") ||
      (values[7] === "O" && values[8] === "O" && values[9] === "O") ||
      (values[1] === "O" && values[4] === "O" && values[7] === "O") ||
      (values[2] === "O" && values[5] === "O" && values[8] === "O") ||
      (values[3] === "O" && values[6] === "O" && values[9] === "O") ||
      (values[1] === "O" && values[5] === "O" && values[9] === "O") ||
      (values[3] === "O" && values[5] === "O" && values[7] === "O")
    ) {
      winner = "O";
      prompt = "exit";
    } else if (
      values[1] !== 1 &&
      values[2] !== 2 &&
      values[3] !== 3 &&
      values[4] !== 4 &&
      values[5] !== 5 &&
      values[6] !== 6 &&
      values[7] !== 7 &&
      values[8] !== 8 &&
      values[9] !== 9
    ) {
      winner = "";
      prompt = "exit";
    }

    if (!spotTaken) {
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  }

  if (winner === "X") {
    console.log("X Wins!!!");
  } else if (winner === "O") {
    console.log("O Wins!!!");
  } else {
    console.log("No Winner!!!");
  }

  process.exit();
}
