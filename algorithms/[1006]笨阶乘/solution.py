# topics = ["栈"]


class Solution:
    def clumsy(self, N: int) -> int:
        """
        栈模拟
        """
        # 当前计算结果
        curr: int = N
        # 保留之前计算结果，只需要栈顶元素
        last: int = 0
        # 0 - 乘法；1 - 除法；2 - 加法；3 - 减法
        op = 0

        for i in range(1, N)[::-1]:
            if op == 0:
                curr *= i
            elif op == 1:
                curr = int(curr / i)
            elif op == 2:
                curr += i
            else:
                last += curr
                curr = -i

            op = 0 if op == 3 else op + 1

        return last + curr
