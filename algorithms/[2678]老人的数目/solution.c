// topics = ["字符串"]

/**
 * time O(n), space O(1), n = detailsSize
 */
int countSeniors(char **details, int detailsSize)
{
    int cnt = 0;

    for (int i = 0; i < detailsSize; i++)
    {
        char *info = details[i];
        int age = (info[11] - '0') * 10 + (info[12] - '0');
        if (age > 60)
        {
            cnt++;
        }
    }

    return cnt;
}