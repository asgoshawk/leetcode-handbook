class Solution:
    def floodFill(self, image, sr, sc, color):
        original = image[sr][sc]
        if original == color:
            return image

        def visit(row, column):
            if not (0 <= row < len(image) and 0 <= column < len(image[0])) or image[row][column] != original:
                return
            image[row][column] = color
            visit(row + 1, column)
            visit(row - 1, column)
            visit(row, column + 1)
            visit(row, column - 1)

        visit(sr, sc)
        return image
