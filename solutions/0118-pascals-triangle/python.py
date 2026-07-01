class Solution:
    def generate(self, numRows):
        rows = []
        for r in range(numRows):
            row = [1] * (r + 1)
            for c in range(1, r):
                row[c] = rows[r - 1][c - 1] + rows[r - 1][c]
            rows.append(row)
        return rows
