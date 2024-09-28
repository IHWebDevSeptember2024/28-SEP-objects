const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// primer índice es la fila
console.log(matrix[0]);

// segundo índice seria la columna, por tanto el valor exacto de esa posición
console.log(matrix[0][0]);

const board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

if (board[7][6] === 1) {
  console.log("TOCADO!");
} else {
  console.log("AGUA");
}

describe("dsadsa", () => {
  console.log("holi");
});
