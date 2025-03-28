function countBits(n: number): number[] {
  let ans: number[] = new Array(n + 1).fill(0);
  for (let i: number = 1; i <= n; i++) {
    ans[i] = countOnes(i);
  }
  return ans;
}

function countOnes(n: number): number {
  let count: number = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
}
