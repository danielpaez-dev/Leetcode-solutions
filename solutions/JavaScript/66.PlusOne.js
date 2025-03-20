var plusOne = function (digits) {
    const length = digits.length - 1;

    for (let i = length; i >= 0; i--) {
        digits[i] += 1;
        if (digits[i] < 10) return digits;
        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;
};