function mySqrt(x: number): number {
    if (x < 2) return x;

    let start: number = 1;
    let end: number = Math.floor(x / 2);
    let solution: number = 0;

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