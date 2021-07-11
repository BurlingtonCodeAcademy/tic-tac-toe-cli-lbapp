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

const checkWinner = player => {
  if (
    (values[1] === player && values[2] === player && values[3] === player) ||
    (values[4] === player && values[5] === player && values[6] === player) ||
    (values[7] === player && values[8] === player && values[9] === player) ||
    (values[1] === player && values[4] === player && values[7] === player) ||
    (values[2] === player && values[5] === player && values[8] === player) ||
    (values[3] === player && values[6] === player && values[9] === player) ||
    (values[1] === player && values[5] === player && values[9] === player) ||
    (values[3] === player && values[5] === player && values[7] === player)
  ) {
    return true;
  }
  return false;
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
    if (parseInt(prompt) === values[parseInt(prompt)]) {
      values[parseInt(prompt)] = currentPlayer;
    } else {
      spotTaken = true;
    }

    if (checkWinner("X")) {
      winner = "X";
      prompt = "exit";
    } else if (checkWinner("O")) {
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
    console.log(grid(values) + "\nX Wins!!!");
  } else if (winner === "O") {
    console.log(grid(values) + "\nO Wins!!!");
  } else {
    console.log(grid(values) + "\nNo Winner!!!");
  }

  process.exit();
}
