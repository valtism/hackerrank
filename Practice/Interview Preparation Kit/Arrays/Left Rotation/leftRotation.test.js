const leftRotation = require("./leftRotation");

test("sample", () => {
    expect(leftRotation([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4]);
});
