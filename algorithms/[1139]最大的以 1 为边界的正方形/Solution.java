// topics = ["字符串"]

class Solution {
    /**
     * 二维前缀和
     * time O(m * n * min(m, n)), space O(m * n)
     */
    public int largest1BorderedSquare(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        // 横向前缀和
        int[][] rs = new int[m + 1][n + 1];
        // 纵向前缀和
        int[][] cs = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                rs[i][j] = grid[i - 1][j - 1] + rs[i][j - 1];
                cs[i][j] = grid[i - 1][j - 1] + cs[i - 1][j];
            }
        }

        // (i, j) 为正方形左上顶点, d 为边长
        for (int d = Math.min(m, n); d >= 0; d--) {
            for (int i = 0; i < m - d + 1; i++) {
                for (int j = 0; j < n - d + 1; j++) {
                    if ((cs[i + d][j + 1] - cs[i][j + 1] == d)
                            && (rs[i + 1][j + d] - rs[i + 1][j] == d)
                            && (cs[i + d][j + d] - cs[i][j + d] == d)
                            && (rs[i + d][j + d] - rs[i + d][j] == d)) {
                        return d * d;
                    }
                }
            }
        }

        return 0;
    }

    /**
     * 动态规划
     * time O(m * n * min(m, n)), space O(m * n)
     */
    public int largest1BorderedSquare2(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        // left[i][j] 表示从 grid[i - 1][j - 1] 起左侧连续 1 的最大数目
        int[][] left = new int[m + 1][n + 1];
        // up[i][j] 表示从 grid[i - 1][j - 1] 起上方连续 1 的最大数目
        int[][] up = new int[m + 1][n + 1];

        int maxBorder = 0;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (grid[i - 1][j - 1] == 1) {
                    left[i][j] = left[i][j - 1] + 1;
                    up[i][j] = up[i - 1][j] + 1;
                    int border = Math.min(left[i][j], up[i][j]);
                    while (left[i - border + 1][j] < border || up[i][j - border + 1] < border) {
                        border--;
                    }
                    maxBorder = Math.max(maxBorder, border);
                }
            }
        }
        return maxBorder * maxBorder;
    }
}
