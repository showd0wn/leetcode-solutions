// topics = ["栈"]

import java.util.Deque;
import java.util.LinkedList;

class Solution {
    /**
     * 单调栈
     * time O(n), space O(n), n 为数组长度
     */
    public int[] dailyTemperatures(int[] temperatures) {
        Deque<Integer> stk = new LinkedList<>();
        int n = temperatures.length;
        int[] res = new int[n];

        for (int i = 0; i < n; i++) {
            while (stk.size() > 0 && temperatures[stk.peek()] < temperatures[i]) {
                int idx = stk.pop();
                res[idx] = i - idx;
            }
            stk.push(i);
        }

        return res;
    }
}