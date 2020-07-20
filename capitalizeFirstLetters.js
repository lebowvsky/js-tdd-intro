const assert = require("assert");

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters("javaScript is so good"), "Javascript Is So Good");
assert.strictEqual(capitalizeFirstLetters("z"), "Z");
assert.strictEqual(capitalizeFirstLetters(""), "");

const capitalizeFirstLetters = (input) => {
  let arrTemp = input.split(" ");
  arrTemp.forEach(word => {
    word.length > 0
    ? word[0].toUpperCase() + word.slice(1)
    : '';
  })
  return arrTemp.join(" ");
}