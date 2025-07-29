const { getLength, genRandomText } = require("./logic");

const randomText = genRandomText(getLength());
console.log(randomText);
