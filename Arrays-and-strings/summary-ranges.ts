function summaryRanges(nums: number[]): string[] {
  const result: Array<string> = [];

  let first = nums[0];
  let second = first + 1;

  for (let i = 1; i < nums.length + 1; i++) {
    if (nums[i] === second) {
      second++;
      continue;
    }

    if (nums[i] !== second && first === second - 1) {
      result.push(`${first}`);
      first = nums[i];
      second = first + 1;
      continue;
    }

    if (nums[i] !== second) {
      result.push(`${first}->${second - 1}`);
      first = nums[i];
      second = first + 1;
      continue;
    }
  }

  return result;
}

console.log(summaryRanges([0, 1, 2, 5, 7, 8, 9, 11]));
