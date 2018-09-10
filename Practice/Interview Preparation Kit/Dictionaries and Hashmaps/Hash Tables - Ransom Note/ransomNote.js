function ransomNote(magazine, note) {
    for (let i = 0; i < note.length; i++) {
        const word = note[i];
        const j = magazine.indexOf(word);
        if (j === -1) {
            return false;
        }
        magazine[j] = null;
    }
    return true;
}

module.exports = ransomNote;
