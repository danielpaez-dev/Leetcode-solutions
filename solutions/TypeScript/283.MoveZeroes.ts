function moveZeroes(nums: number[]): void {
  let slow: number = 0;
  for (let fast: number = 0; fast <= nums.length - 1; fast++) {
    if (nums[fast] != 0) {
      let temp: number = nums[slow];
      nums[slow] = nums[fast];
      nums[fast] = temp;
      slow++;
    }
  }
}
