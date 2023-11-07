// topics = ["数组", "哈希表"]

/**
 * Note: The returned array must be malloced, assume caller calls free().
 * 计算排序
 * time O(nC), space O(C), n = numsSize, C 为排序数据范围
 */
int *getSubarrayBeauty(int *nums, int numsSize, int k, int x, int *returnSize)
{
    // 计数排序，索引 [1, 50] 记录整数 -1 到 -50 出现的个数
    int cnt[51] = {0};

    // 初始化前 k 个数的计数（只统计负数）
    for (int i = 0; i < k; i++)
    {
        if (nums[i] < 0)
        {
            cnt[-nums[i]]++;
        }
    }

    int n = numsSize - k + 1;
    int *res = (int *)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
    {
        // “美丽值” 默认为 0
        res[i] = 0;

        // 寻找第 x 小的数
        int left = x;
        for (int j = 50; j > 0; j--)
        {
            if (cnt[j] >= left)
            {
                res[i] = -j;
                break;
            }
            left -= cnt[j];
        }

        // 维护下一个长度为 k 的子数组的计数
        if (i != n - 1 && nums[i] < 0)
        {
            cnt[-nums[i]]--;
        }
        if (i != n - 1 && nums[i + k] < 0)
        {
            cnt[-nums[i + k]]++;
        }
    }

    *returnSize = n;
    return res;
}
