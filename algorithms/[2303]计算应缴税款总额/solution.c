// topics = ["数组"]

/**
 * 模拟 time O(n), space O(1), n = bracketsSize
 */
double calculateTax(int **brackets, int bracketsSize, int *bracketsColSize, int income)
{
    int tax = 0;
    int lastUpper = 0;

    for (int i = 0; i < bracketsSize; i++)
    {
        int curUpper = brackets[i][0], curPercent = brackets[i][1];

        if (income > curUpper)
        {
            tax += (curUpper - lastUpper) * curPercent;
        }
        else
        {
            tax += (income - lastUpper) * curPercent;
            break;
        }
        lastUpper = curUpper;
    }

    return (double)tax / 100.0;
}