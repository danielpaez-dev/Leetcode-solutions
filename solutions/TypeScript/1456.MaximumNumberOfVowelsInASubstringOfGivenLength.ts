function maxVowels(s: string, k: number): number {
    const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u']);
    let currentVowels: number = 0;
    for (let i: number = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentVowels++;
        }
    }
    let maxVowels: number = currentVowels;

    for (let i: number = k; i < s.length; i++) {
        if (vowels.has(s[i - k])) {
            currentVowels--;
        }
        if (vowels.has(s[i])) {
            currentVowels++;
        }
        maxVowels = Math.max(maxVowels, currentVowels);
    }

    return maxVowels;
};