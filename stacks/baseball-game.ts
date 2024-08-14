// An integer x ->  Record a new score of x.
// '+' -> Record a new score that is the sum of the previous two scores.
// 'D' -> Record a new score that is the double of the previous score.
// 'C' -> Invalidate the previous score, removing it from the record.

function calPoints(operations: string[]): number {
  const record: number[] = [];
  while (operations.length) {
    const operation = operations.shift();
    switch (operation) {
      case "+":
        const n = record.length - 1;
        record.push(record[n] + record[n - 1]);
        break;
      case "C":
        record.pop();
        break;
      case "D":
        record.push(record[record.length - 1] * 2);
        break;
      default:
        record.push(Number(operation));
        break;
    }
  }

  const initialValue = 0;
  const sum = record.reduce((acc, current) => acc + current, initialValue);

  return sum;
}

console.log(calPoints(["5", "2", "C", "D", "+"]));
