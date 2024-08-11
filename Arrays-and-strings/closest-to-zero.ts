// Given an integer array numbers of size n, return the number with the value closest to 0 in numbers.
//  If there are multiple answers, return the number with the largest value.

function solution(numbers: Array<number>) {
  let closest = Infinity;
  let actualNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    const difference = Math.abs(0 - numbers[i]);
    if (closest === difference) {
      actualNumber = actualNumber < numbers[i] ? numbers[i] : actualNumber;
    }
    if (closest > difference) {
      closest = difference;
      actualNumber = numbers[i];
    }
  }
  return actualNumber;
}

console.log(solution([-100000, -100000]));
console.log(solution([-4, -2, 1, 4, 8]));
console.log(solution([2, -1, 1]));
