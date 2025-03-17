var climbStairs = function (n) {
    if (n <= 2) return n;
    let step1 = 1;
    let step2 = 2;
    for (let i = 3; i <= n; i++) {
        let temp = step2;
        step2 += step1;
        step1 = temp;
    }
    return step2;
};