var lengthOfLastWord = function (s) {
    const stringArray = s.trim().split(" ");
    const length = stringArray.length;
    return stringArray[length - 1].length;
};