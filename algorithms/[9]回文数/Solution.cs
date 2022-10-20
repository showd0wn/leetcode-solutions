// topics = ["数学"]

public class Solution
{
    public bool IsPalindrome(int x)
    {
        if (x < 0)
        {
            return false;
        }

        int n = x;
        int y = 0;
        while (n > 0)
        {
            y = y * 10 + n % 10;
            n = n / 10;
        }

        return x == y;
    }
}
