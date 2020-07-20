const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it("transform 'javaScript is so good' correctly", () => {
    assert.strictEqual(
      capitalizeFirstLetters("javaScript is so good"),
      "JavaScript Is So Good"
    );
  });

  it("transform 'z' correctly", () => {
    assert.strictEqual(capitalizeFirstLetters("z"), "Z");
  });

  it("works with empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
