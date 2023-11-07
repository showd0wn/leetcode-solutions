// topics = ["字符串", "哈希表"]

#include <string>
#include <unordered_set>

using namespace std;

class Solution
{
public:
    /**
     * time O(n + m), space O(1), n 和 m 分别是 text 和 brokenLetters 长度
     */
    int canBeTypedWords(string text, string brokenLetters)
    {
        unordered_set<char> broken;
        for (char ch : brokenLetters)
        {
            broken.insert(ch);
        }

        int res = 0;
        bool flag = true;
        for (char ch : text)
        {
            if (ch == ' ')
            {
                if (flag)
                {
                    ++res;
                }
                flag = true;
            }
            else if (broken.count(ch))
            {
                flag = false;
            }
        }

        // 判断最后一个单词状态
        return flag ? ++res : res;
    }
};
