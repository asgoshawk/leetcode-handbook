class Solution:
    def isValidSudoku(self, board):
        seen = set()
        for r in range(9):
            for c in range(9):
                value = board[r][c]
                if value == ".":
                    continue
                box = (r // 3) * 3 + c // 3
                keys = ((r, value, "row"), (c, value, "col"), (box, value, "box"))
                if any(key in seen for key in keys):
                    return False
                seen.update(keys)
        return True
