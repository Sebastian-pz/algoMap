// Given an array of intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals, and return an array of the non-overlapping
// intervals that cover all the intervals in the input.
function merge(intervals: number[][]): number[][] {
  let result: number[][] = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let first = intervals[0][0];
  let last = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [f, l] = intervals[i];
    if (f <= last && l > last) {
      last = l;
      continue;
    }

    if (f > last) {
      result.push([first, last]);
      first = f;
      last = l;
      continue;
    }
  }

  result.push([first, last]);

  return result;
}

console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);

console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
