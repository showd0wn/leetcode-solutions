// topics = ["字典树", "深度优先搜索"]

export class TrieNode {
  endOfWord: string | boolean;
  next: Map<string, TrieNode | null>;
  constructor() {
    this.endOfWord = false;
    this.next = new Map();
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }
  insert(word: string): void {
    let node = this.root;

    for (const char of word) {
      if (!node.next.has(char)) {
        node.next.set(char, new TrieNode());
      }
      node = node.next.get(char)!;
    }

    node.endOfWord = word;
  }
}

function findWords(board: string[][], words: string[]): string[] {
  const m = board.length;
  const n = board[0].length;

  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }

  const dfs = (i: number, j: number, root: TrieNode): void => {
    const c = board[i][j];
    const t = root.next.get(c)!;

    if (t?.endOfWord) {
      res.push(t.endOfWord as string);
      t.endOfWord = false;
    }

    board[i][j] = '#';
    const next = [
      [i - 1, j],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j],
    ];
    for (const [ni, nj] of next) {
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && t?.next.has(board[ni][nj])) {
        dfs(ni, nj, t);
      }
    }
    board[i][j] = c;

    if (t?.next.size == 0) {
      root.next.set(c, null);
    }
  };

  const res: string[] = [];
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (trie.root.next.has(board[i][j])) {
        dfs(i, j, trie.root);
      }
    }
  }

  return res;
}
