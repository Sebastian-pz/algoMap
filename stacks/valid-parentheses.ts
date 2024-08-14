// Could be a Map
const braces = {
  "[": "]",
  "{": "}",
  "(": ")",
};

function validateClose(lastOpen: string, close: string) {
  if (braces[lastOpen] === close) return true;
}

function isValid(s: string): boolean {
  const openBraces: string[] = [];

  const open = Object.keys(braces);

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      openBraces.push(s[i]);
    }

    if (!open.includes(s[i])) {
      const lastOpen = openBraces.pop();
      if (!lastOpen) return false;
      if (!validateClose(lastOpen, s[i])) return false;
    }
  }

  return open.length === 0;
}

console.log(isValid("({}][])"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
