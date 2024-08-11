const romanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const intValue = romanValues[s[i]];
    if (intValue < romanValues[s[i + 1]]) {
      result -= intValue;
      continue;
    }
    result += intValue;
  }

  return result;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("IV"));
console.log(romanToInt("MCMXCIV"));
