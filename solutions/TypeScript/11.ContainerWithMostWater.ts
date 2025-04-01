function maxArea(height: number[]): number {
  let maxArea: number = 0;
  let left: number = 0;
  let right: number = height.length - 1;

  while (left < right) {
    let area: number = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, area);

    height[left] < height[right] ? left++ : right--;
  }

  return maxArea;
}
