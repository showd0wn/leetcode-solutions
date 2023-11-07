// topics = ["数学"]

#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 * 模拟 time O(1), space O(1)
 */
double *convertTemperature(double celsius, int *returnSize)
{
    double *p = (double *)malloc(2 * sizeof(double));
    p[0] = celsius + 273.15;
    p[1] = celsius * 1.80 + 32.00;
    *returnSize = 2;
    return p;
}