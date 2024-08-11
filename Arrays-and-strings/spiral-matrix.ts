// Given an m x n matrix, return all elements of the matrix in spiral order.
function spiralOrder(matrix: number[][]): number[] {
  const result: Array<number> = [];

  // Recorrer la fila ➡️
  // Recorrer la columna ⬇️
  // Reccorer la fila ⬅️
  // Recorrer la columna ⬆️

  let up = 0;
  let left = 0;
  let down = matrix.length - 1;
  let right = matrix[0].length - 1;

  while (left <= right && up <= down) {
    // ➡️
    for (let i = left; i <= right; i++) {
      result.push(matrix[up][i]);
    }
    up++;

    // ⬇️
    for (let i = up; i <= down; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // ⬅️
    if (left <= right && up <= down) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[down][i]);
      }
      down--;
    }

    // ⬆️
    if (left <= right && up <= down) {
      for (let i = down; i >= up; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}

// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);

// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
