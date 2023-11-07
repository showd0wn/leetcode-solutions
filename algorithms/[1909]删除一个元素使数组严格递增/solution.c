// topics = ["数组"]

#include <stdbool.h>

/**
 * time O(n), space O(1)
 */
bool canBeIncreasing(int *nums, int numsSize)
{
    int limit = 1;
    for (int i = 1; i < numsSize; i++)
    {
        if (nums[i] <= nums[i - 1])
        {
            if (limit == 0)
            {
                return false;
            }
            if (i == 1 || (i - 2 >= 0 && nums[i - 2] < nums[i]))
            {
                limit--;
            }
            else if ((i + 1 == numsSize) || (i + 1 < numsSize && nums[i - 1] < nums[i + 1]))
            {
                nums[i] = nums[i - 1];
                limit--;
            }
            else
            {
                return false;
            }
        }
    }

    return true;
}