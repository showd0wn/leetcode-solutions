# topics = ["数学"]

from typing import List


class Solution:
    def validTicTacToe(self, board: List[str]) -> bool:
        x_count = sum(row.count('X') for row in board)
        o_count = sum(row.count('O') for row in board)

        def win(player: str) -> bool:
            for i in range(3):
                if all(board[i][j] == player for j in range(3)):
                    return True
                if all(board[j][i] == player for j in range(3)):
                    return True

            if board[1][1] == board[0][0] == board[2][2] == player:
                return True

            if board[1][1] == board[0][2] == board[2][0] == player:
                return True

            return False

        return (not win('X') and x_count == o_count) or (not win('O') and x_count - o_count == 1)
