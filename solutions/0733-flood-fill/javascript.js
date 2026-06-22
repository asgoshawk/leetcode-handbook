var floodFill = function (image, sr, sc, color) {
  const original = image[sr][sc];
  if (original === color) return image;
  const visit = (row, column) => {
    if (row < 0 || row === image.length || column < 0 || column === image[0].length || image[row][column] !== original) return;
    image[row][column] = color;
    visit(row + 1, column); visit(row - 1, column); visit(row, column + 1); visit(row, column - 1);
  };
  visit(sr, sc);
  return image;
};
