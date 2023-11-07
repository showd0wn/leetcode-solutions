// topics = ["哈希表"]

#include <stdbool.h>
#include <stddef.h>

/**
 * 枚举
 * time O(k*10^k), space O(1), k 为数据位数
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *findEvenNumbers(int *digits, int digitsSize, int *returnSize)
{
    // 先统计 digits 中 0-9 的总个数
    int total[10] = {0};
    for (int i = 0; i < digitsSize; i++)
    {
        total[digits[i]]++;
    }

    int *res = (int *)malloc(sizeof(int) * 500);
    int size = 0;

    for (int x = 100; x <= 998; x += 2)
    {
        bool flag = true;
        int cnt[10] = {0};
        int num = x;
        while (num)
        {
            int c = num % 10;
            if (++cnt[c] > total[c])
            {
                flag = false;
                break;
            }
            num /= 10;
        }

        if (flag)
        {
            res[size++] = x;
        }
    }

    *returnSize = size;
    return res;
}