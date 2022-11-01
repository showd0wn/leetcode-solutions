// topics = ["回溯算法"]

function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  const path: string[] = [];

  const backtrack = function (left = 0, right = 0) {
    if (path.length == 2 * n) {
      res.push(path.join(''));
      return;
    }

    // 如果左括号数量不大于 n，我们可以放一个左括号
    if (left < n) {
      path.push('(');
      backtrack(left + 1, right);
      path.pop();
    }

    // 如果右括号数量小于左括号的数量，我们可以放一个右括号
    if (right < left) {
      path.push(')');
      backtrack(left, right + 1);
      path.pop();
    }
  };

  backtrack();

  return res;
}
