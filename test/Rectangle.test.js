const assert = require('assert');
const Rectangle = require('../Rectangle');

describe("Rectangle", () => {
  it('is a square', () => {
    const rectangle = new Rectangle(5, 5)
    assert.strictEqual(rectangle.isSquare(), true);
  });

  it('is not square', () => {
    const rectangle = new Rectangle(6, 5)
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it('Area is correct', () => {
    const rectangle = new Rectangle(13, 7)
    assert.strictEqual(rectangle.getArea(), 91);
  });

  it('Perimeter is correct', () => {
    const rectangle = new Rectangle(13, 7)
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });


})