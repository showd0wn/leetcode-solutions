// topics = ["回溯算法"]

using System;
using System.Text;
using System.Collections.Generic;

public class Solution
{
    private Dictionary<char, string> d = new Dictionary<char, string>()
    {
        { '2', "abc" },
        { '3', "def" },
        { '4', "ghi" },
        { '5', "jkl" },
        { '6', "mno" },
        { '7', "pqrs" },
        { '8', "tuv" },
        { '9', "wxyz" },
    };

    public IList<string> LetterCombinations(string digits)
    {
        if (digits.Length == 0)
        {
            return new List<string>() { };
        }

        IList<string> res = new List<string>();
        Stack<char> path = new Stack<char>();

        Backtrack(digits, res, path);

        return res;
    }

    void Backtrack(string digits, IList<string> list, Stack<char> path, int idx = 0)
    {
        if (path.Count == digits.Length)
        {
            char[] arr = path.ToArray();
            Array.Reverse(arr);
            list.Add(String.Join("", arr));
            return;
        }
        foreach (char ch in d[digits[idx]])
        {
            path.Push(ch);
            Backtrack(digits, list, path, idx + 1);
            path.Pop();
        }
    }
}
