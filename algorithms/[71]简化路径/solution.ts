// topics = ["栈"]

function simplifyPath(path: string): string {
  const st: string[] = [];

  for (const s of path.split('/')) {
    if (s == '' || s == '.') {
      continue;
    }
    if (s == '..') {
      if (st.length) {
        st.pop();
      }
    } else {
      st.push(s);
    }
  }

  return `/${st.join('/')}`;
}
