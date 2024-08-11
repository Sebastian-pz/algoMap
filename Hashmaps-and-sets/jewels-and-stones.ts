function numJewelsInStones(jewels: string, stones: string): number {
  const set = new Set();

  [...jewels].forEach((jewel) => {
    set.add(jewel);
  });

  return [...stones].filter((stone) => set.has(stone)).length;
}

const a = "aA";
const b = "aAAbbbb";
const r = numJewelsInStones(a, b);
console.log(r);
