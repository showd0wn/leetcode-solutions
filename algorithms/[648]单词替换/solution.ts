// topics = ["字典树", "哈希表"]


export class TrieNode {
  endOfWord: boolean;
  next: Map<string, TrieNode>;
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
  findPrefix(word: string): string {
    let node = this.root;
    let prexfix = '';

    for (const char of word) {
      if (!node.next.has(char)) {
        return word;
      }
      node = node.next.get(char)!;
      prexfix += char;
      if (node.endOfWord) {
        return prexfix;
      }
    }

    return word;
  }
}

// 解法一 前缀树
function replaceWords(dictionary: string[], sentence: string): string {
  const trie = new Trie();

  // 将词根加入前缀树
  dictionary.forEach((pre) => trie.insert(pre));

  const list = sentence.split(' ');
  const res = list.map((word) => trie.findPrefix(word));

  return res.join(' ');
}

// 解法二 暴力匹配
function replaceWords2(dictionary: string[], sentence: string): string {
  dictionary.sort((a, b) => a.length - b.length);

  const list = sentence.split(' ');
  const res = list.map((word) => {
    const prefix = dictionary.find((pre) => word.startsWith(pre));
    return prefix ?? word;
  });

  return res.join(' ');
}
