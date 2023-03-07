// topics = ["数组", "贪心算法"]

import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;

class Solution {
    /**
     * 贪心 + 前缀和 + 单调栈
     * time O(n), space O(n), n 为数组长度
     */
    public int longestWPI(int[] hours) {
        int n = hours.length;

        // 前缀和，preSum[i] 表示 [0, i) 区间表现良好的天数（劳累的天数 - 不劳累的天数）
        int[] preSum = new int[n + 1];
        for (int i = 0; i < n; i++) {
            preSum[i + 1] = preSum[i] + (hours[i] > 8 ? 1 : -1);
        }

        // 单调栈，严格递减
        Deque<Integer> s = new LinkedList<>();
        s.add(0);
        for (int i = 1; i < n + 1; i++) {
            if (preSum[i] < preSum[s.peekLast()]) {
                s.offerLast(i);
            }
        }

        // 逆序遍历(重要！)
        // 如果是正序遍历，单调栈就解决不了，见 longestWPI2
        int res = 0;
        for (int i = n; i > 0; i--) {
            while (s.size() > 0 && preSum[s.peekLast()] < preSum[i]) {
                res = Math.max(res, i - s.pollLast());
            }
        }

        return res;
    }

    public int longestWPI2(int[] hours) {
        int n = hours.length;

        // 前缀和，preSum[i] 表示 [0, i) 区间表现良好的天数（劳累的天数 - 不劳累的天数）
        int[] preSum = new int[n + 1];
        for (int i = 0; i < n; i++) {
            preSum[i + 1] = preSum[i] + (hours[i] > 8 ? 1 : -1);
        }

        // 单调列表，严格递减
        List<Integer> q = new ArrayList<>();
        q.add(0);

        int res = 0;
        for (int i = 1; i < n + 1; i++) {
            if (preSum[i] == preSum[q.get(q.size() - 1)]) {
                continue;
            }
            if (preSum[i] < preSum[q.get(q.size() - 1)]) {
                q.add(i);
                continue;
            }
            for (int j = 0; j < q.size(); j++) {
                if (preSum[i] > preSum[q.get(j)]) {
                    res = Math.max(res, i - q.get(j));
                    break;
                }
            }
        }

        return res;
    }
}