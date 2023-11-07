// topics = ["哈希表"]

#include <string>
#include <vector>
#include <unordered_set>

using namespace std;

class Solution
{
public:
    /**
     * Hash Table
     * time O(nm), time O(nm), n 是数组 paths 的长度，m 是城市名称的最大长度。
     */
    string destCity(vector<vector<string>> &paths)
    {
        // 出发城市
        unordered_set<string> citiesA;
        for (auto path : paths)
        {
            citiesA.insert(path[0]);
        }
        for (auto path : paths)
        {
            if (citiesA.count(path[1]) == 0)
            {
                return path[1];
            }
        }
        return "";
    }
};