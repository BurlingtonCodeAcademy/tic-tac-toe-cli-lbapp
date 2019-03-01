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

let values = {
  row1col1: 1,
  row1col2: 2,
  row1col3: 3,
  row2col1: 4,
  row2col2: 5,
  row2col3: 6,
  row3col1: 7,
  row3col2: 8,
  row3col3: 9
};

const grid = gridValues => {
  return (
    "\n" +
    " " +
    gridValues.row1col1 +
    " | " +
    gridValues.row1col2 +
    " | " +
    gridValues.row1col3 +
    "\n--- --- ---\n" +
    " " +
    gridValues.row2col1 +
    " | " +
    gridValues.row2col2 +
    " | " +
    gridValues.row2col3 +
    "\n--- --- ---\n" +
    " " +
    gridValues.row3col1 +
    " | " +
    gridValues.row3col2 +
    " | " +
    gridValues.row3col3 +
    "\n\n" +
    "Player X's turn\n" +
    "Move to?"
  );
};

start();

async function start() {
  let prompt = "start";

  while (prompt.toLowerCase() !== "exit") {
    prompt = await ask(grid(values));
  }

  console.log("Thanks for playing!");
  process.exit();
}
