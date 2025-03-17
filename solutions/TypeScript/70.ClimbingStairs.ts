function climbStairs(n: number): number {
  if (n <= 2) return n;

  let step1: number = 1;
  let step2: number = 2;

  for (let i: number = 3; i <= n; i++) {
    let temp: number = step2;
    step2 += step1;
    step1 = temp;
  }

  return step2;
}
