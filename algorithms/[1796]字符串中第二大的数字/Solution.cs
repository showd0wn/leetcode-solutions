// topics = ["字符串"]

public class Solution
{
    public int SecondHighest(string s)
    {
        int i = 0;
        int a = -1, b = -1;
        foreach (char ch in s)
        {
            if (int.TryParse(ch.ToString(), out i))
            {
                if (i > a)
                {
                    b = a;
                    a = i;
                }
                else if (a > i && i > b)
                {
                    b = i;
                }
            }
        }
        return b;
    }
}
