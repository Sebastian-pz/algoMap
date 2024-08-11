// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineLetters = new Map();

  [...magazine].forEach((letter) => {
    if (magazineLetters.has(letter)) {
      magazineLetters.set(letter, magazineLetters.get(letter) + 1);
    } else magazineLetters.set(letter, 1);
  });

  for (const letter of ransomNote) {
    const availableLetter = magazineLetters.get(letter);
    if (!magazineLetters.has(letter) || !availableLetter) return false;
    if (availableLetter > 0)
      magazineLetters.set(letter, magazineLetters.get(letter) - 1);
  }

  return true;
}

const a = "aa";
const b = "aab";
const x = canConstruct(a, b);
console.log(x);
