var mySqrt = function (x) {
    if (x < 2) return x;

    let start = 1;
    let end = Math.floor(x / 2);
    let solution = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (mid * mid === x) {
            return mid;
        }
        else if (mid * mid < x) {
            solution = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }
    return solution;
};