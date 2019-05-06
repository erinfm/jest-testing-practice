const reverseString = require("./reversestring");

test("reverseString functione exists", () => {
  expect(reverseString).toBeDefined();
});

test("String reverses with uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
