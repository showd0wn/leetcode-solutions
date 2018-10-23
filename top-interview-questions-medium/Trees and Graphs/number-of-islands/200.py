class Solution:
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        total = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    self.search(i, j, grid)
                    total += 1
        return total

    def search(self, i, j, grid):
        if i < 0 or j < 0: return
        if i > len(grid) - 1 or j > len(grid[i]) - 1 or grid[i][j] == '0': return
        grid[i][j] = '0'
        self.search(i - 1, j, grid)
        self.search(i, j - 1, grid)
        self.search(i + 1, j, grid)
        self.search(i, j + 1, grid)
