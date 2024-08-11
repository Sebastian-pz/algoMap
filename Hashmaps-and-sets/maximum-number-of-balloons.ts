function comprobeWord(word: string, map: Map<string, number>) {
  for (const letter of word) {
    if (!map.has(letter)) return false;
    if (!map.get(letter)) return false;
    map.set(letter, map.get(letter)! - 1);
  }
  return true;
}

function maxNumberOfBalloons(text: string): number {
  const balloon = "balloon";
  const availableLetters = new Map();

  for (const letter of text) {
    if (!availableLetters.has(letter)) {
      availableLetters.set(letter, 1);
    } else {
      availableLetters.set(letter, availableLetters.get(letter) + 1);
    }
  }
  let times = 0;
  while (comprobeWord(balloon, availableLetters)) {
    times++;
  }

  return times;
}

const maxNumber = maxNumberOfBalloons("loonbalxballpoon");
console.log(maxNumber);
