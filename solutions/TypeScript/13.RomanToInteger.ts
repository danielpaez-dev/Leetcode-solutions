function romanToInt(s: string): number {
  let result: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    if (
      (s[i] === "I" && ["V", "X"].includes(s[i + 1])) ||
      (s[i] === "X" && ["L", "C"].includes(s[i + 1])) ||
      (s[i] === "C" && ["D", "M"].includes(s[i + 1]))
    ) {
      result -= getRomanValue(s[i]);
    } else {
      result += getRomanValue(s[i]);
    }
  }

  return result;
}

function getRomanValue(char) {
  switch (char) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}
