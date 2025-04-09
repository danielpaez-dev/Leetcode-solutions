var increasingTriplet = function (nums) {
    let tripletI = Infinity
    let tripletJ = Infinity

    for (let num of nums) {
        if (num <= tripletI) {
            tripletI = num;
        } else if (num <= tripletJ) {
            tripletJ = num;
        } else {
            return true;
        }
    }

    return false;
};