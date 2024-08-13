function groupAnagrams(strs: string[]): string[][] {
  const anagramsMap = new Map();

  strs.forEach((str) => {
    const count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = count.join(",");
    if (!anagramsMap.has(key)) anagramsMap.set(key, []);
    anagramsMap.get(key).push(str);
  });

  return Array.from(anagramsMap.values());
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

console.log(groupAnagrams(strs));
