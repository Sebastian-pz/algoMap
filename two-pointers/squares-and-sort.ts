function sortedSquares(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;

  let result = new Array(nums.length);
  let index = nums.length - 1;

  while (left <= right) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;
    if (leftSquare > rightSquare) {
      result[index--] = leftSquare;
      left++;
    } else {
      result[index--] = rightSquare;
      right--;
    }
  }

  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
