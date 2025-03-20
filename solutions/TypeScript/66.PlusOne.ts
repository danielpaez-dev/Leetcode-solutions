function plusOne(digits: number[]): number[] {
  const length: number = digits.length - 1;

  for (let i: number = length; i >= 0; i--) {
    digits[i] += 1;
    if (digits[i] < 10) return digits;
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
}
