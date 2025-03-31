var mergeAlternately = function (word1, word2) {
  let res = "";
  let i = 0;
  const word1Length = word1.length;
  const word2Length = word2.length;

  while (i < Math.max(word1Length, word2Length)) {
    if (i < word1Length) res += word1[i]
    if (i < word2Length) res += word2[i]
    i++;
  }

  return res;
};