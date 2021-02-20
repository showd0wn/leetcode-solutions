# topics = ["双指针"]


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        m = len(s1)
        n = len(s2)

        cnt = [0] * 26
        offset = ord('a')

        for s in s1:
            cnt[ord(s) - offset] -= 1

        # 左右指针
        i = j = 0

        while j < n:
            # 进
            x = ord(s2[j]) - offset

            cnt[x] += 1

            while cnt[x] > 0:
                # 出i
                y = ord(s2[i]) - offset
                cnt[y] -= 1
                i += 1

            # cnt 元素值之和为 0，即所有元素均为 0
            if j - i + 1 == m:
                return True

            j += 1

        return False
