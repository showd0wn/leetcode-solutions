// topics = ["回溯算法"]

using System.Collections.Generic;

public class Solution
{
    IList<string> res = new List<string>();
    IList<char> path = new List<char>();

    public IList<string> GenerateParenthesis(int n)
    {
        Backtrack(0, 0, n);
        return res;
    }

    void Backtrack(int left, int right, int n)
    {
        if (path.Count == 2 * n)
        {
            res.Add(string.Join("", path));
            return;
        }

        // 如果左括号数量不大于 n，我们可以放一个左括号
        if (left < n)
        {
            path.Add('(');
            Backtrack(left + 1, right, n);
            path.RemoveAt(path.Count - 1);
        }

        // 如果右括号数量小于左括号的数量，我们可以放一个右括号
        if (right < left)
        {
            path.Add(')');
            Backtrack(left, right + 1, n);
            path.RemoveAt(path.Count - 1);
        }
    }
}
