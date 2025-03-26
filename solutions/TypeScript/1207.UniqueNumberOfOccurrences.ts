function uniqueOccurrences(arr: number[]): boolean {
  let occurrences: { [key: number]: number } = {};
  for (let number of arr) {
    occurrences[number] = (occurrences[number] || 0) + 1;
  }
  const values = Object.values(occurrences);
  return new Set(values).size === values.length;
}
