function isSubsequence(s: string, t: string): boolean {
  let index = 0;
  let charToSearch = s[index];
  for (let i = 0; i < t.length; i++) {
    if (t[i] === charToSearch) {
      index++;
      charToSearch = s[index];
    }
  }

  return index === s.length;
}

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("acb", "ahbgdc"));
