const assert = require("assert");

const capitalizeFirstLetters = (input) => {
  let arrTemp = input.split(" ");
  let arrSoluce =[];
  if(arrTemp[0]) {
    input.split(" ").forEach(word => {
      arrSoluce.push(word[0].toUpperCase() + word.slice(1))
    })
  }
  return arrSoluce.join(" ");
}

/* console.log(capitalizeFirstLetters("")) */

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters("javaScript is so good"), "JavaScript Is So Good");
assert.strictEqual(capitalizeFirstLetters("z"), "Z");
assert.strictEqual(capitalizeFirstLetters(""), "");

