# topics = ["哈希表"]

from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(9):
            rowNums = set()
            colNums = set()
            cubeNums = set()

            for j in range(9):
                ch = board[i][j]
                if ch != '.':
                    if ch in rowNums:
                        return False
                    rowNums.add(ch)

                ch = board[j][i]
                if ch != '.':
                    if ch in colNums:
                        return False
                    colNums.add(ch)

                row = i // 3 * 3 + j // 3
                col = i % 3 * 3 + j % 3
                ch = board[row][col]
                if ch != '.':
                    if ch in cubeNums:
                        return False
                    cubeNums.add(ch)

        return True
