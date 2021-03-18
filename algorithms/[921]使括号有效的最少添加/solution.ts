// topics = ["栈"]

// sapce O(1)
function minAddToMakeValid(S: string): number {
  let res = 0;
  let bal = 0;

  for (const s of S) {
    // 遇到 '('; bal += 1
    // 遇到 ')'; bal -= 1
    bal += s == '(' ? 1 : -1;

    if (bal == -1) {
      bal += 1;
      res += 1;
    }
  }

  return res + bal;
}
