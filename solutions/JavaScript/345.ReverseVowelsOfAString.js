var reverseVowels = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const sArray = s.split('');

  let left = 0;
  let right = s.length - 1;

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

  return sArray.join('');
};