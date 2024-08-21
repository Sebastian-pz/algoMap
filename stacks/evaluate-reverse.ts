const operations = ["+", "-", "/", "*"];

function operate(op: string, n1: number, n2: number) {
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;

    case "/":
      const r = n1 / n2;
      return r > 0 ? Math.floor(r) : Math.ceil(r);

    case "*":
      return n1 * n2;

    default:
      return n1;
  }
}

function evalRPN(tokens: string[]): number {
  let actualTokens = tokens;
  let i = 0;
  let j = 0;
  while (actualTokens.length > 2) {
    if (operations.includes(actualTokens[i])) {
      const n1 = actualTokens[i - 2];
      const n2 = actualTokens[i - 1];
      const op = actualTokens[i];
      const result = operate(op, Number(n1), Number(n2));
      actualTokens.splice(i - 2, 3, result.toString());
      i = 0;
    } else {
      i++;
    }
  }

  return Number(actualTokens[0]);
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
