// topics = ["字符串"]

function removeDuplicates(S: string): string {
  const n = S.length;
  const arr = S.split('');

  for (let i = n - 2; i >= 0; i -= 1) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i, 2);
    }
  }

  return arr.join('');
}
