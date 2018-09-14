class Solution:
    # @param n, an integer
    # @return an integer
    def reverseBits(self, n):
        answer = 0
        for i in range(32):
            answer <<= 1
            answer |= n & 1
            n >>= 1
        return answer
