// topics = ["数组", "哈希表"]

#include <stdlib.h>
#include <string.h>

#define MIN(i, j) (((i) < (j)) ? (i) : (j))

/**
 * Note: The returned array must be malloced, assume caller calls free().
 * 前缀和 & 差分
 * time O(C(n + q)), space (Cn), n = numsSize, q = queriesSize, C = 100
 */
int *minDifference(int *nums, int numsSize, int **queries, int queriesSize, int *queriesColSize, int *returnSize)
{
    // pre[k][c] 表示 nums [0, k - 1] 区间中数字 c 出现的次数
    int(*pre)[101] = calloc((numsSize + 1) * 101, sizeof(int));
    for (int i = 0; i < numsSize; i++)
    {
        // memcpy 快于循环赋值，后者会超时
        memcpy(pre[i + 1], pre[i], 101 * sizeof(int));
        pre[i + 1][nums[i]]++;
    }

    int *res = (int *)malloc(queriesSize * sizeof(int));
    for (int k = 0; k < queriesSize; k++)
    {
        int m = queries[k][0];
        int n = queries[k][1];
        int min = 100;
        int last = -100;
        for (int c = 1; c <= 100; c++)
        {
            // 数字 c 在查询区间中出现过
            if (pre[n + 1][c] - pre[m][c] > 0)
            {
                min = MIN(min, c - last);
                last = c;
            }
        }
        min = min == 100 ? -1 : min;
        res[k] = min;
    }

    free(pre);

    *returnSize = queriesSize;
    return res;
}