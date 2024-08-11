function isAnagram(s: string, t: string): boolean {
  const anagramLetters = new Map();

  for (const letter of s) {
    if (!anagramLetters.has(letter)) anagramLetters.set(letter, 1);
    else anagramLetters.set(letter, anagramLetters.get(letter) + 1);
  }

  for (const letter of t) {
    if (!anagramLetters.has(letter)) return false;
    if (!anagramLetters.get(letter)) return false;
    anagramLetters.set(letter, anagramLetters.get(letter) - 1);
  }
  let remainingLetters = 0;
  anagramLetters.forEach((v) => {
    remainingLetters += v;
  });

  return remainingLetters ? false : true;
}

let s = "ab";
let t = "a";

const y = isAnagram(s, t);
console.log(y);
