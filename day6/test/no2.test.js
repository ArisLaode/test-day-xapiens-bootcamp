const { add, subtract, multiply, divide } = require("../index");

test("add 1, 4, 5, 2, 3 to equal 15 ", () => {
  expect(add(1, 4, 5, 2, 3)).toBe(15);
});

test("substract 1, 4, 5, 2, 3 to equal -13 ", () => {
  expect(subtract(1, 4, 5, 2, 3)).toBe(-13);
});

test("multiply 1, 4, 5, 2, 3 to equal 120 ", () => {
  expect(multiply(1, 4, 5, 2, 3)).toBe(120);
});

test("divide 1, 4, 5, 2, 3 to equal 120 ", () => {
  expect(divide(1, 4, 5, 2, 3)).toBeLessThan(1);
});
