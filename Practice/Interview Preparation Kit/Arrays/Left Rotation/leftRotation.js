function leftRotation(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let x = array.shift();
        array.push(x);
    }
    return array;
}
module.exports = leftRotation;
