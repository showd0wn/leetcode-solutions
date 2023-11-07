// topics = ["数学"]

#include <stdio.h>
#include <math.h>

int getTime(char *time)
{
    int h, m;
    sscanf(time, "%d:%d", &h, &m);
    return 60 * h + m;
}

/**
 * time O(1), space O(1)
 */
int numberOfRounds(char *loginTime, char *logoutTime)
{
    int start = getTime(loginTime);
    int finish = getTime(logoutTime);

    if (finish < start)
    {
        finish += 1440;
    }

    int snum = (int)ceil(start / 15.0);
    int fnum = (int)floor(finish / 15.0);

    // 可能存在 start < finish, 但 snum > fnum 的情况，要保证不为负
    return (int)fmax(fnum - snum, 0);
}