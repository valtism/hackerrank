const minimumBribes = require("./newYearChaos");

test("TestCase 0 - 0", () => {
    expect(minimumBribes([2, 1, 5, 3, 4])).toBe(3);
});

test("TestCase 0 - 1", () => {
    expect(minimumBribes([2, 5, 1, 3, 4])).toBe("Too chaotic");
});

test("TestCase 1 - 0", () => {
    expect(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])).toBe("Too chaotic");
});

test("TestCase 1 - 1", () => {
    expect(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])).toBe(7);
});

test("TestCase 2 - 0", () => {
    expect(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])).toBe(4);
});
