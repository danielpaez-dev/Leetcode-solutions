function guessNumber(n: number): number {
  let left: number = 1;
  let right: number = n;
  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);
    let pick: number = guess(mid);
    if (pick === -1) {
      right = mid - 1;
    } else if (pick === 1) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
}
