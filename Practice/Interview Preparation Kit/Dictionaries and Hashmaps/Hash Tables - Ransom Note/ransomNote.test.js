const ransomNote = require("./ransomNote");

test("TestCase 0", () => {
    expect(ransomNote(["give", "me", "one", "grand", "today", "night"], ["give", "one", "grand", "today"])).toBe(true);
});

test("TestCase 1", () => {
    expect(ransomNote(["two", "times", "three", "is", "not", "four"], ["two", "times", "two", "is", "four"])).toBe(false);
});

test("TestCase 2", () => {
    expect(ransomNote(["ive", "got", "a", "lovely", "bunch", "of", "coconuts"], ["ive", "got", "some", "coconuts"])).toBe(false);
});
