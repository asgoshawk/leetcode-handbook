function numIslands(grid) {
  let count = 0;
  const rows = grid.length;
  const columns = grid[0].length;

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      if (grid[row][column] !== '1') continue;
      count += 1;
      const stack = [[row, column]];
      grid[row][column] = '0';
      while (stack.length > 0) {
        const [currentRow, currentColumn] = stack.pop();
        for (const [nextRow, nextColumn] of [[currentRow - 1, currentColumn], [currentRow + 1, currentColumn], [currentRow, currentColumn - 1], [currentRow, currentColumn + 1]]) {
          if (nextRow >= 0 && nextRow < rows && nextColumn >= 0 && nextColumn < columns && grid[nextRow][nextColumn] === '1') {
            grid[nextRow][nextColumn] = '0';
            stack.push([nextRow, nextColumn]);
          }
        }
      }
    }
  }
  return count;
}
