# topics = ["数组"]

from typing import List


class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        0 —> 0  ... 0
        1 —> 1  ... 1
        0 —> 1  ... 2
        1 —> 0  ... 3
        """
        m = len(board)
        n = len(board[0])
        next = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

        for i in range(m):
            for j in range(n):
                count = 0
                for cx, cy in next:
                    nx, ny = cx + i, cy + j
                    if 0 <= nx < m and 0 <= ny < n:
                        if board[nx][ny] == 1 or board[nx][ny] == 3:
                            count += 1
                if board[i][j] == 0 and count == 3:
                    board[i][j] = 2
                elif board[i][j] == 1 and (0 <= count < 2 or count > 3):
                    board[i][j] = 3

        for i in range(m):
            for j in range(n):
                if board[i][j] == 2:
                    board[i][j] = 1
                elif board[i][j] == 3:
                    board[i][j] = 0
