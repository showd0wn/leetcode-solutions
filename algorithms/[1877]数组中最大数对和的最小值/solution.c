// topics = ["数组", "贪心算法"]

#include <stdlib.h>

int cmp(const void *a, const void *b)
{
    return *(int *)a - *(int *)b;
}

/**
 * time O(nlogn), space O(logn), n = numsSize
 */
int minPairSum(int *nums, int numsSize)
{
    // 快排
    qsort(nums, numsSize, sizeof(int), cmp);

    int l, r, res = 0;
    for (l = 0, r = numsSize - 1; l < r; l++, r--)
    {
        if (nums[l] + nums[r] > res)
        {
            res = nums[l] + nums[r];
        }
    }
    return res;
}