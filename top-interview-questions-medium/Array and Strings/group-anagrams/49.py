class Solution:
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        map = {}
        for str in strs:
            lstr = list(str)
            lstr.sort()
            s = ''.join(lstr)
            map[s] = map[s] + [str] if s in map else [str]
        return list(map.values())
