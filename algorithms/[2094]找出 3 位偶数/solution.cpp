// topics = ["数组"]

#include <vector>
#include <set>

using namespace std;

class Solution
{
public:
    /**
     * 枚举
     * time O(n^3 + mlogm), space O(m), n 为 digits 的长度，m 为符合要求的偶数的数量
     */
    vector<int> findEvenNumbers(vector<int> &digits)
    {
        set<int> nums;

        int n = digits.size();
        for (int i = 0; i < n; i++)
        {
            for (int j = i + 1; j < n; j++)
            {
                for (int k = j + 1; k < n; k++)
                {
                    int a = digits[i], b = digits[j], c = digits[k];
                    if (a != 0 && b % 2 == 0)
                    {
                        nums.insert(a * 100 + c * 10 + b);
                    }
                    if (a != 0 && c % 2 == 0)
                    {
                        nums.insert(a * 100 + b * 10 + c);
                    }
                    if (b != 0 && c % 2 == 0)
                    {
                        nums.insert(b * 100 + a * 10 + c);
                    }
                    if (b != 0 && a % 2 == 0)
                    {
                        nums.insert(b * 100 + c * 10 + a);
                    }
                    if (c != 0 && a % 2 == 0)
                    {
                        nums.insert(c * 100 + b * 10 + a);
                    }
                    if (c != 0 && b % 2 == 0)
                    {
                        nums.insert(c * 100 + a * 10 + b);
                    }
                }
            }
        }

        vector<int> v(nums.begin(), nums.end());

        return v;
    }
};