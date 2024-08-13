function majorityElement(nums: number[]): number {
  const map = new Map();
  nums.forEach((num) => {
    if (!map.has(num)) map.set(num, 1);
    else map.set(num, map.get(num) + 1);
  });

  const condition = Math.ceil(nums.length / 2);
  let result = 0;

  map.forEach((v, k) => {
    if (v >= condition) result = k;
  });

  return result;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3, 2, 3]));
