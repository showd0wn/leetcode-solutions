// topics = ["哈希表"]

using System.Linq;
using System.Collections.Generic;

public class Solution
{
    public string[] GetFolderNames(string[] names)
    {
        // 记录上一次自动生成的后缀编号
        Dictionary<string, int> dict = new Dictionary<string, int>();
        return names.Select(name => GenerateUniqueName(name, dict)).ToArray();
    }

    private string GenerateUniqueName(string name, Dictionary<string, int> dict)
    {
        string uniqueName;
        if (dict.ContainsKey(name))
        {
            while (dict.ContainsKey(AddSuffix(name, dict[name])))
            {
                dict[name] += 1;
            }
            uniqueName = AddSuffix(name, dict[name]);
            dict.Add(uniqueName, 1);
        }
        else
        {
            uniqueName = name;
            dict.Add(name, 1);
        }

        return uniqueName;
    }

    private string AddSuffix(string name, int k)
    {
        return name + "(" + k + ")";
    }
}