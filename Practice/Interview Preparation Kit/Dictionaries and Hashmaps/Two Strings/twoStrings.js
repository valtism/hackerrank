function twoStrings(first, second) {
    const uniqueLetters = new Set(first.split(""));
    for (let letter of uniqueLetters) {
        if (second.indexOf(letter) > -1) {
            return true;
        }
    }
    return false;
}

module.exports = twoStrings;
