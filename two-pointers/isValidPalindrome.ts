function isPalindrome(s: string): boolean {
  const cleanString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  let left = Math.floor(cleanString.length / 2) - 1;
  let right = Math.ceil(cleanString.length / 2);

  while (right < s.length) {
    if (cleanString[left] === cleanString[right]) {
      left--;
      right++;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("ab"));
console.log(isPalindrome("ab@a"));
