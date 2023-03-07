// topics = ["字符串"]

class Solution {
    /**
     * 模拟
     * time O(n * (r + c)), space O(1), n 为字符串的长度，r 和 c 分别为字母板的行数和列数
     */
    public String alphabetBoardPath(String target) {
        StringBuilder sb = new StringBuilder();

        int x = 0, y = 0;
        for (int i = 0; i < target.length(); i++) {
            int[] position = toPosition(target.charAt(i));
            int nx = position[0];
            int ny = position[1];

            // "z" 位置需要特殊考虑
            if (x == 5) {
                moveX(sb, x, nx);
                moveY(sb, y, ny);
            } else {
                moveY(sb, y, ny);
                moveX(sb, x, nx);
            }

            sb.append('!');

            x = nx;
            y = ny;
        }

        return sb.toString();
    }

    public int[] toPosition(char ch) {
        int x = (ch - 'a') / 5;
        int y = (ch - 'a') % 5;
        return new int[] { x, y };
    }

    // 上下移动（变化 x 坐标）
    public void moveX(StringBuilder sb, int x, int nx) {
        if (nx > x) {
            sb.append("D".repeat(nx - x));
        } else if (nx < x) {
            sb.append("U".repeat(x - nx));
        }
    }

    // 左右移动（变化 y 坐标）
    public void moveY(StringBuilder sb, int y, int ny) {
        if (ny > y) {
            sb.append("R".repeat(ny - y));
        } else if (ny < y) {
            sb.append("L".repeat(y - ny));
        }
    }
}