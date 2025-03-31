function mergeAlternately(word1: string, word2: string): string {
  let res: string = "";
  let i: number = 0;
  const word1Length: number = word1.length;
  const word2Length: number = word2.length;

  while (i < Math.max(word1Length, word2Length)) {
    if (i < word1Length) res += word1[i];
    if (i < word2Length) res += word2[i];
    i++;
  }

  return res;
}
