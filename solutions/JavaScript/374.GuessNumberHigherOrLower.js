var guessNumber = function (n) {
    let left = 1;
    let right = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let pick = guess(mid);
        if (pick === -1) {
            right = mid - 1;
        } else if (pick === 1) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
};