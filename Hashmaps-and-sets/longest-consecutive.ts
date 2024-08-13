function longestConsecutive(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let longConsecutive = 0;
  let actualConsecutive = 1;

  let previous: number = nums[0];
  for (let i = 1; i < nums.length + 1; i++) {
    if (previous === nums[i]) continue;
    if (previous + 1 === nums[i]) {
      actualConsecutive++;
      previous++;
    } else {
      previous = nums[i];
      if (actualConsecutive > longConsecutive) {
        longConsecutive = actualConsecutive;
        actualConsecutive = 1;
      }
      actualConsecutive = 1;
    }
  }

  return longConsecutive;
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([1, 2, 0, 1]));
console.log(longestConsecutive([9, 1, -3, 2, 4, 8, 3, -1, 6, -2, -4, 7]));
console.log(longestConsecutive([0, -1]));
