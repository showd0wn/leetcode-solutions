# topics = ["数组"]


class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        """
        模拟
        time O(n), space O(1), n 为字符串长度
        """
        direc = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        direcIndex = 0
        x, y = 0, 0
        for instruction in instructions:
            if instruction == "G":
                x += direc[direcIndex][0]
                y += direc[direcIndex][1]
            elif instruction == "L":
                direcIndex -= 1
                direcIndex %= 4
            else:
                direcIndex += 1
                direcIndex %= 4
        return direcIndex != 0 or (x == 0 and y == 0)
