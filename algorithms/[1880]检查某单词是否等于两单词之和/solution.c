// topics = ["字符串"]

#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

/**
 * time O(n), space O(1), n 为字符串长度总和
 */
int getValue(char *word)
{
    int n = strlen(word);
    for (int i = 0; i < n; i++)
    {
        // 'a' - '0' = 49
        word[i] -= 49;
    }

    return atoi(word);
}

bool isSumEqual(char *firstWord, char *secondWord, char *targetWord)
{
    return getValue(firstWord) + getValue(secondWord) == getValue(targetWord);
}