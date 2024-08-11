function longestCommonPrefix(strs: string[]): string {
  let result = "";
  if (!strs.length) return result;

  const base = strs[0];

  for (let i = 0; i < base.length; i++) {
    const char = base[i];
    let shouldAddChar = true;
    for (let j = 0; j < strs.length; j++) {
      const word = strs[j];
      if (word[i] !== char) {
        shouldAddChar = false;
        break;
      }
    }
    if (shouldAddChar) {
      result += char;
    } else break;
  }

  return result;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
