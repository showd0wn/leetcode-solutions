// topics = ["数组", "哈希表"]

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    /**
     * 哈希表 + 排序
     * time O(nlogn), space O(n), n 为数组长度
     */
    public List<String> alertNames(String[] keyName, String[] keyTime) {
        Map<String, List<Integer>> map = new HashMap<>();
        for (int i = 0; i < keyName.length; i++) {
            String name = keyName[i];
            String time = keyTime[i];
            if (map.containsKey(name)) {
                map.get(name).add(toMinutes(time));
            } else {
                map.put(name, new ArrayList<Integer>());
                map.get(name).add(toMinutes(time));
            }
        }

        List<String> res = new ArrayList<>();
        for (Map.Entry<String, List<Integer>> entry : map.entrySet()) {
            List<Integer> minutes = entry.getValue();

            if (minutes.size() < 3) {
                continue;
            }

            Collections.sort(minutes);
            for (int i = 2; i < minutes.size(); i++) {
                if (minutes.get(i) - minutes.get(i - 2) <= 60) {
                    res.add(entry.getKey());
                    break;
                }
            }
        }

        Collections.sort(res);
        return res;
    }

    private Integer toMinutes(String time) {
        String[] arr = time.split(":");
        return Integer.parseInt(arr[0]) * 60 + Integer.parseInt(arr[1]);
    }
}
