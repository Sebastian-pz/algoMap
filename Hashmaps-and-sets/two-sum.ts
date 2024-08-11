function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else {
      map.set(nums[i], i);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    const n = map.get(needed);
    if (n && i !== n) return [i, n];
  }

  return [0, 0];
}

let nums = [3, 2, 4];
let target = 6;

console.log(twoSum(nums, target));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 3, 4, 2], 6));
console.log(twoSum([3, 3], 6));
