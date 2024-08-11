function containsDuplicate(nums: number[]): boolean {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) set.add(nums[i]);
    else return true;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3]));
