// topics = ["数组"]

import java.util.ArrayList;
import java.util.List;

class Solution {
    /**
     * 遍历 time O(n), space O(1), n 为数组长度
     */
    public List<String> summaryRanges(int[] nums) {
        List<String> res = new ArrayList<>();

        int n = nums.length;
        if (n == 0) {
            return res;
        }

        int i = 0, j = 1;
        while (j < n) {
            if (nums[j] > nums[j - 1] + 1) {
                addToList(res, nums[i], nums[j - 1]);
                i = j;
            }
            j += 1;
        }

        addToList(res, nums[i], nums[j - 1]);

        return res;
    }

    private void addToList(List<String> list, int start, int end) {
        if (start == end) {
            list.add(String.valueOf(start));
        } else {
            list.add(String.format("%d->%d", start, end));
        }
    }
}
