// topics = ["贪心算法", "堆"]

import java.util.PriorityQueue;
import java.util.Queue;

class Solution {
    /**
     * 优先队列
     * time O((n + m)logn), space o(n), n 和 m 分别为 classes 和 extraStudents 长度
     */
    public double maxAverageRatio(int[][] classes, int extraStudents) {
        Queue<int[]> pq = new PriorityQueue<int[]>((a, b) -> {
            // 把分数比较，转换为整数比较
            Long val1 = (long) (b[1] + 1) * b[1] * (a[1] - a[0]);
            Long val2 = (long) (a[1] + 1) * a[1] * (b[1] - b[0]);
            return Long.compare(val2, val1);
        });

        for (int[] cls : classes) {
            pq.add(cls);
        }

        while (extraStudents > 0) {
            int[] out = pq.poll();
            int[] in = new int[] { out[0] + 1, out[1] + 1 };
            pq.add(in);
            extraStudents--;
        }

        return pq.stream().reduce(0.0, (acc, cls) -> acc + ratio(cls), (acc1, acc2) -> acc1 + acc2) / classes.length;
    }

    private static double ratio(int[] arr) {
        int n = arr[0], m = arr[1];
        return Double.valueOf(n) / m;
    }
}