function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;
  const result = Array(nums.length);

  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  for (let i = length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
// My first solution (using division)

// function productExceptSelf(nums: number[]): number[] {
//   const result = Array(nums.length).fill(0);
//   let multResult = 1;
//   for (let i = 0; i < nums.length; i++) {
//     multResult *= nums[i];
//   }
//   for (let i = 0; i < result.length; i++) {
//     result[i] = multResult / nums[i];
//   }

//   return result;
// }
