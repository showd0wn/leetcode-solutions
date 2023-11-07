// topics = ["字符串", "栈"]

/**
 * 栈
 * time O(n), space O(n), n 为字符串长度
 */
int minLength(char *s)
{
    int n = strlen(s);

    char *stk = (char *)malloc(sizeof(char) * n);
    int p = -1;

    for (int i = 0; i < n; i++)
    {
        if (p >= 0 && ((stk[p] == 'A' && s[i] == 'B') || (stk[p] == 'C' && s[i] == 'D')))
        {
            p--;
        }
        else
        {
            stk[++p] = s[i];
        }
    }

    free(stk);
    return p + 1;
}