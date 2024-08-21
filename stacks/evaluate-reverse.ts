const operations = ["+", "-", "/", "*"];

function evalRPN(tokens: string[]): number {
  let numbers: Array<number> = [];

  for (const token of tokens) {
    if (!operations.includes(token)) {
      numbers.push(Number(token));
    } else {
      let n2 = numbers.pop();
      let n1 = numbers.pop();

      switch (token) {
        case "+":
          numbers.push(n1! + n2!);
          break;
        case "-":
          numbers.push(n1! - n2!);
          break;
        case "*":
          numbers.push(n1! * n2!);
          break;
        case "/":
          let r = n1! / n2!;
          numbers.push(r > 0 ? Math.floor(r) : Math.ceil(r));
          break;
        default:
          break;
      }
    }
  }

  return numbers[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));
