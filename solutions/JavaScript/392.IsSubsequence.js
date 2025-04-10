var isSubsequence = function (s, t) {
    let i = 0
    for (const c of t) {
        if (i < s.length && c === s[i]) {
            i++;
        }
    }
    return i === s.length;
};