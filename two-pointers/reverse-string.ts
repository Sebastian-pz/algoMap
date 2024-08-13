function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  let aux = "";

  while (left < right) {
    aux = s[right];
    s[right] = s[left];
    s[left] = aux;
    left++;
    right--;
  }
}

const s = "hola".split("");
reverseString(s);
console.log(s);
