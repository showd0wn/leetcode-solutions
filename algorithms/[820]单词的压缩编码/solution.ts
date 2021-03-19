// topics = ["字典树"]

export class TrieNode {
  endOfWord: boolean;
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

    node.endOfWord = true;
  }
  isleaf(word: string): boolean {
    let node = this.root;

    for (const char of word) {
      node = node.next.get(char)!;
    }

    return node.next.size == 0;
  }
}

function minimumLengthEncoding(words: string[]): number {
  const rwords = new Set([...words.map(w => w.split('').reverse().join(''))]);
  const trie = new Trie();
  let res = 0;

  for (const w of rwords) {
    trie.insert(w);
  }

  for (const w of rwords) {
    if (trie.isleaf(w)) {
      res += w.length + 1;
    }
  }

  return res;
}
