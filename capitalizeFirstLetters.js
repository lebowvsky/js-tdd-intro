const assert = require("assert");

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters("javaScript is so good"), "Javascript Is So Good");
assert.strictEqual(capitalizeFirstLetters("z"), "Z");
assert.strictEqual(capitalizeFirstLetters(""), "");

