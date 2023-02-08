import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    /**
     * 排序 + 字典树
     * time O(nllogn), space O(nl), n 和 l 分别为数组 folder 的长度和文件夹的平均长度
     * 
     * 优化方案1. 按字典序排序后直接遍历，判断前一个字符串是否是当前字符串的前缀（优化空间复杂度）
     * 优化方案2. 无需排序直接构建字典树后遍历，遍历到结束标识即父文件夹，然后回溯（优化时间复杂度）
     */
    public List<String> removeSubfolders(String[] folder) {
        // 排序(字典序)
        Arrays.sort(folder);
        // 字典树根节点
        TrieNode root = new TrieNode();

        List<String> res = new ArrayList<>();

        for (String item : folder) {
            TrieNode node = root;
            String[] path = item.split("/");
            for (int i = 1; i < path.length; i++) {
                String dir = path[i];
                if (node.next.containsKey(dir) && node.next.get(dir).isEnd) {
                    break;
                }
                if (node.next.containsKey(dir)) {
                    node = node.next.get(dir);
                } else if (i < path.length - 1) {
                    node.next.put(dir, new TrieNode());
                    node = node.next.get(dir);
                } else {
                    node.next.put(dir, new TrieNode(true));
                    res.add(String.join("/", path));
                }
            }
        }

        return res;
    }
}

class TrieNode {
    public Map<String, TrieNode> next;
    public boolean isEnd;

    TrieNode() {
        next = new HashMap<>();
        isEnd = false;
    }

    TrieNode(boolean isEnd) {
        next = new HashMap<>();
        this.isEnd = isEnd;
    }
}