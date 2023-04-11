// topics = ["数组"]

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;

class Solution {
    private Pattern p1 = Pattern.compile(".+(?=\\(\\d+\\)$)");
    private Pattern p2 = Pattern.compile("(?<=\\()\\d+(?=\\)$)");

    public String[] getFolderNames(String[] names) {
        // 记录上一次自动生成的后缀编号
        Map<String, Integer> idxMap = new HashMap<>();
        // 记录冲突的后缀编号
        Map<String, Set<Integer>> usedMap = new HashMap<>();
        return Stream.of(names).map(name -> generateUniqueName(name, idxMap, usedMap)).toArray(String[]::new);
    }

    private String generateUniqueName(String name, Map<String, Integer> idxMap, Map<String, Set<Integer>> usedMap) {
        String uniqueName;
        if (idxMap.containsKey(name)) {
            int idx = idxMap.get(name) + 1;
            if (usedMap.containsKey(name)) {
                Set<Integer> used = usedMap.get(name);
                while (used.contains(idx)) {
                    idx += 1;
                }
                used.add(idx);
            } else {
                Set<Integer> used = new HashSet<>();
                used.add(idx);
                usedMap.put(name, used);
            }
            uniqueName = name + "(" + idx + ")";
            idxMap.put(name, idx);
            idxMap.put(uniqueName, 0);
        } else {
            uniqueName = name;
            idxMap.put(name, 0);
        }

        Matcher m1 = p1.matcher(name);
        Matcher m2 = p2.matcher(name);
        if (m1.find() && m2.find()) {
            String preName = m1.group();
            String value = m2.group();
            if (usedMap.containsKey(preName)) {
                usedMap.get(preName).add(Integer.parseInt(value));
            } else {
                Set<Integer> used = new HashSet<>();
                used.add(Integer.parseInt(value));
                usedMap.put(preName, used);
            }
        }

        return uniqueName;
    }
}