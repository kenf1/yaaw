const core = require("@actions/core");

function getLength() {
  const input = core.getInput("length");
  const length = parseInt(input, 10);

  if (isNaN(length)) {
    throw new Error(
      `Invalid input: length ('${input}') is not a valid number.`,
    );
  }
  if (length < 1 || length > 50) {
    throw new Error(
      `Invalid input: length must be between 1 and 50. Provided: ${length}`,
    );
  }

  return length;
}

function genRandomText(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

const randomText = genRandomText(getLength());
console.log(randomText);
