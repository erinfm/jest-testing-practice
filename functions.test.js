const functions = require("./functions");

// toBe
test("Add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test("Add 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY AND FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toStrictEqual / toEqual
test("User should be Dave Davis object", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Dave",
    lastName: "Davis"
  });
});

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 300;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("There is no I in team", () => {
  expect("teamI").toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["dog", "john"];
  expect(usernames).toContain("admin");
});
