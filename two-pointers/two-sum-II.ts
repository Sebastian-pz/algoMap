function twoSum(numbers: number[], target: number): number[] {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    if (numbers[i] + numbers[j] < target) i++;
    if (numbers[i] + numbers[j] > target) j--;
    if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
  }

  return [0, 0];
}

const numbers = [2, 7, 11, 15];
const target = 9;
const a = twoSum(numbers, target);
console.log(a);
