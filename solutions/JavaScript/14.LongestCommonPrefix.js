var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0]; // In case there is only one value so it returns the strs directly without passing the for

    let commonPrefix = "";

    for (let i = 0; i < Math.min(...strs.map(str => str.length)); i++) {
        let char = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != char) {
                return commonPrefix;
            }
        }
        commonPrefix += char;
    }

    return commonPrefix; // In case there is an array with multiple ""
};