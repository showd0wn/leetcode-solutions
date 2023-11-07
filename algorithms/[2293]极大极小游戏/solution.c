// topics = ["数组"]

#define MAX(i, j) (((i) > (j)) ? (i) : (j))
#define MIN(i, j) (((i) < (j)) ? (i) : (j))

/**
 * 模拟 time O(n), space O(1), n = numsSize
 */
int minMaxGame(int *nums, int numsSize)
{
    int n = numsSize;
    while (n > 1)
    {
        for (int i = 0; i < n / 2; i++)
        {
            nums[i] = i % 2 ? MAX(nums[2 * i], nums[2 * i + 1]) : MIN(nums[2 * i], nums[2 * i + 1]);
        }
        n = n / 2;
    }
    return nums[0];
}