// topics = ["数学"]

#include <stdbool.h>

/**
 * 模拟
 * time O(1), space O(1)
 */
char *categorizeBox(int length, int width, int height, int mass)
{
    bool isBulky = length >= 10000 || width >= 10000 || height >= 10000 || (long long)length * width * height >= 1000000000;
    bool isHeavy = mass >= 100;
    if (isBulky && isHeavy)
    {
        return "Both";
    }
    if (!isBulky && !isHeavy)
    {
        return "Neither";
    }
    if (isBulky && !isHeavy)
    {
        return "Bulky";
    }
    return "Heavy";
}