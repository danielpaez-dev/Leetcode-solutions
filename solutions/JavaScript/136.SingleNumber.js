var singleNumber = function (nums) {
    if (nums.length <= 1) return nums[0];

    let literal = {};

    for (num of nums) {
        if (literal[num] === undefined) {
            literal[num] = 1;
        } else {
            if (literal[num]) literal[num] += 1;
        }
    }

    for (let key in literal) {
        if (literal[key] === 1) {
            return Number(key);
        }
    }
};