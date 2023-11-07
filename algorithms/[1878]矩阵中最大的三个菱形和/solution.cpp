// topics = ["数组", "数学"]

#include <vector>
#include <array>
#include <set>
#include <tuple>
#include <algorithm>

using namespace std;

struct Answer
{
    array<int, 3> ans{};

    void put(int x)
    {
        if (x > ans[0])
        {
            tie(ans[0], ans[1], ans[2]) = tuple{x, ans[0], ans[1]};
        }
        else if (x != ans[0] && x > ans[1])
        {
            tie(ans[1], ans[2]) = tuple{x, ans[1]};
        }
        else if (x != ans[0] && x != ans[1] && x > ans[2])
        {
            ans[2] = x;
        }
    }

    vector<int> get() const
    {
        vector<int> ret;
        for (int num : ans)
        {
            if (num)
            {
                ret.push_back(num);
            }
        }
        return ret;
    }
};

class Solution
{
public:
    /**
     * 前缀和 + 枚举
     * time O(mn*min(m, n)), space O(mn)), m 和 n 为 grid 长宽
     */
    vector<int> getBiggestThree(vector<vector<int>> &grid)
    {
        int m = grid.size(), n = grid[0].size();
        // sum1[x][y] 表示从位置 (x, y) 开始往左上方走，走到边界为止的所有格子的元素和
        vector<vector<int>> sum1(m, vector<int>(n + 1));
        // sum2[x][y] 表示从位置 (x, y) 开始往右上方走，走到边界为止的所有格子的元素和
        vector<vector<int>> sum2(m, vector<int>(n + 1));

        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (i == 0)
                {
                    sum1[i][j] = grid[i][j];
                    sum2[i][j] = grid[i][j];
                }
                else if (j == 0)
                {
                    sum1[i][j] = grid[i][j];
                    sum2[i][j] = sum2[i - 1][j + 1] + grid[i][j];
                }
                else
                {
                    sum1[i][j] = sum1[i - 1][j - 1] + grid[i][j];
                    sum2[i][j] = sum2[i - 1][j + 1] + grid[i][j];
                }
            }
        }

        Answer ans;
        for (int i = 0; i < m; ++i)
        {
            for (int j = 0; j < n; ++j)
            {
                // 以 (i, j) 为中心的菱形有 maxl 个
                int maxl = min({i + 1, m - i, j + 1, n - j});
                // 单格菱形
                ans.put(grid[i][j]);
                // 枚举菱形中心到顶点的距离
                for (int c = 1; c < maxl; c++)
                {
                    // 上顶点坐标
                    int ux = i - c, uy = j;
                    // 右顶点坐标
                    int rx = i, ry = j + c;
                    // 下顶点坐标
                    int dx = i + c, dy = j;
                    // 左顶点坐标
                    int lx = i, ly = j - c;

                    // 菱形和
                    int sum = (sum1[dx][dy] - sum1[lx][ly]) + (sum1[rx][ry] - sum1[ux][uy]) + (sum2[lx][ly] - sum2[ux][uy]) + (sum2[dx][dy] - sum2[rx][ry]) + grid[ux][uy] - grid[dx][dy];
                    ans.put(sum);
                }
            }
        }
        return ans.get();
    }

    /**
     * 暴力枚举
     */
    vector<int> getBiggestThree2(vector<vector<int>> &grid)
    {
        set<int, greater<int>> sum;
        int m = grid.size(), n = grid[0].size();
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                // 以 (i, j) 为中心的菱形有 maxl 个，用一个列表记录这些菱形的和，列表下标代表菱形的边长。
                int maxl = min({i + 1, m - i, j + 1, n - j});
                vector<int> vec(maxl, 0);

                for (int x = i - maxl + 1; x < i + maxl; x++)
                {
                    for (int y = j - maxl + 1; y < j + maxl; y++)
                    {
                        int d = abs(x - i) + abs(y - j);
                        if (d < maxl)
                        {
                            vec.at(d) += grid[x][y];
                        }
                    }
                }

                // 插入降序 set 中
                for (int s : vec)
                {
                    sum.insert(s);
                }
            }
        }

        vector<int> res;
        for (auto it = sum.begin(); it != sum.end(); it++)
        {
            res.push_back(*it);
            if (res.size() == 3)
            {
                break;
            }
        }

        return res;
    }
};