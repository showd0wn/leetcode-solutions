// topics = ["数组"]

class Solution {
    /**
     * time O(n^2), space O(1), n 为矩阵边长
     */
    public int[][] largestLocal(int[][] grid) {
        int n = grid.length;
        int[][] res = new int[n - 2][n - 2];

        for (int i = 1; i < n - 1; i++) {
            for (int j = 1; j < n - 1; j++) {
                for (int a = i - 1; a <= i + 1; a++) {
                    for (int b = j - 1; b <= j + 1; b++) {
                        res[i - 1][j - 1] = Math.max(res[i - 1][j - 1], grid[a][b]);
                    }
                }
            }
        }

        return res;
    }
}