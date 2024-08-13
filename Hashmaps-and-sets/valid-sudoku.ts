function checkColumn(board: string[][], column: number) {
  const map = new Map();
  for (let i = 0; i < board.length; i++) {
    if (map.has(board[i][column]) && board[i][column] !== ".") return false;
    map.set(board[i][column], "-");
  }
  return true;
}

function checkRow(
  board: string[][],
  row: number,
  map3x3: Map<string, boolean>
) {
  const map = new Map();
  for (let i = 0; i < board[0].length; i++) {
    if (map.has(board[row][i]) && board[row][i] !== ".") return false;
    map.set(board[row][i], "-");

    const position3x3 = Math.floor(i / 3);
    const key = `x${Math.floor(row / 3)}y${position3x3}${board[row][i]}`;
    if (map3x3.has(key)) return false;
    if (board[row][i] !== ".") map3x3.set(key, true);
  }
  return true;
}

function isValidSudoku(board: string[][]): boolean {
  const map3x3 = new Map();

  for (let i = 0; i < board.length; i++) {
    if (!checkColumn(board, i)) return false;
    if (!checkRow(board, i, map3x3)) return false;
  }

  return true;
}

// maybe i can use Math.floor(n/3) to set 3x3
const board = [
  [".", "8", "7", "6", "5", "4", "3", "2", "1"],
  ["2", ".", ".", ".", ".", ".", ".", ".", "."],
  ["3", ".", ".", ".", ".", ".", ".", ".", "."],
  ["4", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", ".", "."],
  ["6", ".", ".", ".", ".", ".", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  ["8", ".", ".", ".", ".", ".", ".", ".", "."],
  ["9", ".", ".", ".", ".", ".", ".", ".", "."],
];
const result = isValidSudoku(board);
console.log(result);
