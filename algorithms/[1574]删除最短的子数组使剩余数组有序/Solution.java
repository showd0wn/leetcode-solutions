// topics = ["数组", "双指针"]

class Solution {
    /**
     * time O(n), space O(1), n 为数组长度
     */
    public int findLengthOfShortestSubarray(int[] arr) {
        int n = arr.length;

        // [0, i] 为最长非递减前缀, [j, n) 为最长非递减后缀
        int i = 0, j = n - 1;
        while (i + 1 < n && arr[i + 1] >= arr[i]) {
            i += 1;
        }
        while (j - 1 >= 0 && arr[j] >= arr[j - 1]) {
            j -= 1;
        }

        if (i >= j) {
            return 0;
        }

        int res = Math.min(n - i - 1, j);
        int l = 0, r = j;
        while (l <= i && r < n) {
            while (arr[r] < arr[l]) {
                r += 1;
                if (r == n) {
                    return res;
                }
            }
            res = Math.min(res, r - l - 1);
            l += 1;
        }
        return res;
    }
}