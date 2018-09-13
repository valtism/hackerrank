const twoStrings = require("./twoStrings");

test("TestCase 0 - 0", () => {
    expect(twoStrings("hello", "world")).toBe(true);
});

test("TestCase 0 - 1", () => {
    expect(twoStrings("hi", "world")).toBe(false);
});

test("TestCase 1 - 0", () => {
    expect(twoStrings("wouldyoulikefries", "abcabcabcabcabcabc")).toBe(false);
});

test("TestCase 1 - 1", () => {
    expect(twoStrings("hackerrankcommunity", "cdecdecdecde")).toBe(true);
});

test("TestCase 2 - 0", () => {
    expect(twoStrings("aardvark", "apple")).toBe(true);
});

test("TestCase 2 - 1", () => {
    expect(twoStrings("beetroot", "sandals")).toBe(false);
});
