function lengthOfLastWord(s: string): number {
  const stringArray: string[] = s.trim().split(" ");
  const length: number = stringArray.length;
  return stringArray[length - 1].length;
}
