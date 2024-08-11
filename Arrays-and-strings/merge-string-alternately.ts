// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
//  starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

function mergeAlternately(word1: string, word2: string) {
  let resultString = "";
  const maxLength = word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < maxLength; i++) {
    if (word1[i] && word2[i]) {
      resultString += word1[i];
      resultString += word2[i];
    }

    if (!word1[i]) {
      resultString += word2.slice(i, word2.length);
      break;
    }

    if (!word2[i]) {
      resultString += word1.slice(i, word1.length);
      break;
    }
  }

  return resultString;
}

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("abcd", "pq"));
console.log(mergeAlternately("ab", "pqrs"));
