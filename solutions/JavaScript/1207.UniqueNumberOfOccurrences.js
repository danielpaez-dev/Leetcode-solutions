var uniqueOccurrences = function (arr) {
    let occurrences = {}
    for (number of arr) {
        occurrences[number] = (occurrences[number] || 0) + 1;
    }
    const values = Object.values(occurrences);
    return new Set(values).size === values.length;
};