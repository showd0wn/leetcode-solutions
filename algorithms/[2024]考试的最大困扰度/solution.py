# topics = ["双指针", "滑动窗口"]


class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        """
        Sliding Window. time O(n), space O(1), n 为数组长度
        同 1004.最大连续1的个数 III
        """
        n = len(answerKey)
        res = 0

        left = right = 0
        count = {"F": 0, "T": 0}

        while right < n:
            count[answerKey[right]] += 1

            if min(count["F"], count["T"]) > k:
                count[answerKey[left]] -= 1
                left += 1

            right += 1
            res = max(res, right - left)

        return max(res, right - left)
