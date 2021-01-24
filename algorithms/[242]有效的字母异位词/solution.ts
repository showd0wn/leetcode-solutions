function isAnagram(s: string, t: string): boolean {
  const sortStr = function(s: string): string {
    const arr = s.split('');
    arr.sort();
    return arr.join('');
  }

  return sortStr(s) === sortStr(t);
};
