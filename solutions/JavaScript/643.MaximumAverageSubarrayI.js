var findMaxAverage = function (nums, k) {
    let windowSum = nums.slice(0, k).reduce((acc, num) => acc + num, 0);
    let maxSum = windowSum;

    for (let i = 1; i <= nums.length - k; i++) {
        windowSum = windowSum - nums[i - 1] + nums[i + k - 1];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k
};