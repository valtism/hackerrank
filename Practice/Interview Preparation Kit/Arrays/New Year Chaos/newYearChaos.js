function minimumBribes(queue) {
    let swaps = 0;
    // Use 1-indexed array to match person numbers
    for (let pos = 1; pos <= queue.length; pos++) {
        const person = queue[pos - 1];
        if (person >= pos) {
            // Person at or in front of their original spot
            if (person - pos > 2) {
                // Too many bribes, too chaotic
                return "Too chaotic";
            }
            continue;
        }
        if (person < pos) {
            // Person behind their spot, record how many people jumped in front of them
            for (let j = 1; j <= pos; j++) {
                const forwardPerson = queue[j - 1];
                if (forwardPerson > person) {
                    // Someone has jumped ahead
                    swaps++;
                }
            }
        }
    }
    return swaps;
}

module.exports = minimumBribes;
