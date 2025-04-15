function findMaxAverage(nums: number[], k: number): number {
  let windowSum: number = nums.slice(0, k).reduce((acc, num) => acc + num, 0);
  let maxSum: number = windowSum;

  for (let i: number = 1; i <= nums.length - k; i++) {
    windowSum = windowSum - nums[i - 1] + nums[i + k - 1];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
}
