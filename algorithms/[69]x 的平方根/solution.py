# topics = ["数学", "二分查找"]


class Solution:
    def mySqrt(self, x: int) -> int:
        left, right = 0, x

        # 闭区间写法
        while left <= right:
            mid = (left + right) // 2
            square = mid ** 2

            if square == x:
                return mid

            if square < x:
                left = mid + 1
            else:
                right = mid - 1

        return left - 1
