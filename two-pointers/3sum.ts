// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Best solution
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let answer: number[][] = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let lo = i + 1,
      hi = n - 1;
    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi];
      if (sum === 0) {
        answer.push([nums[i], nums[lo], nums[hi]]);
        lo++;
        hi--;
        while (lo < hi && nums[lo] === nums[lo - 1]) lo++;
        while (lo < hi && nums[hi] === nums[hi + 1]) hi--;
      } else if (sum < 0) {
        lo++;
      } else {
        hi--;
      }
    }
  }

  return answer;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
