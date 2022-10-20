// topics = ["数学"]

using System;
using System.Collections.Generic;

public class Solution
{
    public string IntToRoman(int num)
    {
        char[][] symbols = new char[4][]
        {
            new char[] { 'I', 'V', 'X' },
            new char[] { 'X', 'L', 'C' },
            new char[] { 'C', 'D', 'M' },
            new char[] { 'M' },
        };

        int n = 0; // 数位
        string res = "";

        while (num > 0)
        {
            int curr = num % 10;

            if (1 <= curr && curr < 4)
            {
                res = new String(symbols[n][0], curr) + res;
            }
            else if (curr == 4)
            {
                res = "" + symbols[n][0] + symbols[n][1] + res;
            }
            else if (5 <= curr && curr < 9)
            {
                res = "" + symbols[n][1] + new String(symbols[n][0], curr - 5) + res;
            }
            else if (curr == 9)
            {
                res = "" + symbols[n][0] + symbols[n][2] + res;
            }

            n += 1;
            num /= 10;
        }

        return res;
    }
}
