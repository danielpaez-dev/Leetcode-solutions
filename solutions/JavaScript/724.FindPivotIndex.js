var pivotIndex = function (nums) {
    let leftSum = 0, rightSum = 0;

    for (let num of nums) {
        rightSum += num
    }

    for (let i = 0; i <= nums.length - 1; i++) {
        rightSum -= nums[i]
        if (leftSum == rightSum) return i
        leftSum += nums[i]
    }

    return -1;
};