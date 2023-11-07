// topics = ["深度优先搜索", "广度优先搜索"]

#include <vector>
#include <array>
#include <queue>
#include <utility>

using namespace std;

class Solution
{
private:
    static constexpr array<array<int, 2>, 4> dirs = {{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}};

    void dfs(vector<vector<int>> &grid, int x, int y)
    {
        int m = grid.size();
        int n = grid[0].size();
        for (int d = 0; d < 4; d++)
        {
            int nx = x + dirs[d][0];
            int ny = y + dirs[d][1];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] == 1)
            {
                grid[nx][ny] = 0; // 避免重复遍历
                dfs(grid, nx, ny);
            }
        }
    }

public:
    /**
     * BFS
     * time O(mn), space O(mn), m 和 n 为 grid 长宽
     */
    int countSubIslands(vector<vector<int>> &grid1, vector<vector<int>> &grid2)
    {
        int m = grid1.size();
        int n = grid1[0].size();
        queue<pair<int, int>> q;

        auto bfs = [&]()
        {
            bool flag = true;
            while (!q.empty())
            {
                auto [x, y] = q.front();
                q.pop();
                if (grid1[x][y] == 0)
                {
                    flag = false;
                }
                for (int d = 0; d < 4; d++)
                {
                    int nx = x + dirs[d][0];
                    int ny = y + dirs[d][1];
                    if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid2[nx][ny] == 1)
                    {
                        q.emplace(nx, ny);
                        grid2[nx][ny] = 0; // 避免重复遍历
                    }
                }
            }
            return flag;
        };

        int res = 0;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (grid2[i][j] == 1)
                {
                    q.emplace(i, j);
                    grid2[i][j] = 0; // 避免重复遍历
                    res += bfs();
                }
            }
        }
        return res;
    }

    /**
     * DFS
     * time O(mn), space O(mn), m 和 n 为 grid 长宽
     */
    int countSubIslands2(vector<vector<int>> &grid1, vector<vector<int>> &grid2)
    {
        int m = grid1.size();
        int n = grid1[0].size();

        // 第一次遍历, 先将 grid2 中不属于 grid1 子岛的岛屿淹掉
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (grid1[i][j] == 0 && grid2[i][j] == 1)
                {
                    grid2[i][j] = 0; // 避免重复遍历
                    dfs(grid2, i, j);
                }
            }
        }

        // 第一次遍历, 统计 grid2 剩余子岛的数量
        int res = 0;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (grid2[i][j] == 1)
                {
                    res++;
                    grid2[i][j] = 0; // 避免重复遍历
                    dfs(grid2, i, j);
                }
            }
        }
        return res;
    }
};