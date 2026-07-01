var setZeroes = function (matrix) {
  const m = matrix.length, n = matrix[0].length;
  const firstRow = matrix[0].some(x => x === 0);
  const firstCol = matrix.some(row => row[0] === 0);
  for (let r = 1; r < m; r++) for (let c = 1; c < n; c++) if (matrix[r][c] === 0) { matrix[r][0] = 0; matrix[0][c] = 0; }
  for (let r = 1; r < m; r++) for (let c = 1; c < n; c++) if (matrix[r][0] === 0 || matrix[0][c] === 0) matrix[r][c] = 0;
  if (firstRow) for (let c = 0; c < n; c++) matrix[0][c] = 0;
  if (firstCol) for (let r = 0; r < m; r++) matrix[r][0] = 0;
  return matrix;
};
