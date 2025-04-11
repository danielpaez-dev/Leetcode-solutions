var maxOperations = function (nums, k) {
    let res = 0;
    const numsMap = new Map();

    for (const num of nums) {
        let complement = k - num;
        if (numsMap.get(complement) > 0) {
            res++;
            numsMap.set(complement, numsMap.get(complement) - 1);
        } else {
            numsMap.set(num, (numsMap.get(num) || 0) + 1);
        }
    }

    return res;
};