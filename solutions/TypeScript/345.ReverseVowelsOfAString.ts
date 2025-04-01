function reverseVowels(s: string): string {
  const vowels: Set<string> = new Set(["a", "e", "i", "o", "u"]);
  const sArray: string[] = s.split("");

  let left: number = 0;
  let right: number = s.length - 1;

  while (left < right) {
    if (!vowels.has(sArray[left].toLowerCase())) {
      left++;
    } else if (!vowels.has(sArray[right].toLowerCase())) {
      right--;
    } else {
      [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
      left++;
      right--;
    }
  }

  return sArray.join("");
}
