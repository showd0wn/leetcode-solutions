// topics = ["设计", "字典树", "深度优先搜索"]

export class TrieNode {
  endOfWord: boolean;
  next: Map<string, TrieNode>;
  constructor() {
    this.endOfWord = false;
    this.next = new Map();
  }
}

class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let node = this.root;

    for (const char of word) {
      if (!node.next.has(char)) {
        node.next.set(char, new TrieNode());
      }
      node = node.next.get(char)!;
    }

    node.endOfWord = true;
  }

  search(word: string): boolean {
    return this.find(word, this.root);
  }

  find(word: string, root: TrieNode): boolean {
    let node = root;

    for (let i = 0, len = word.length; i < len; i += 1) {
      const char = word[i];
      if (char == '.') {
        // 递归判断
        return [...node.next.values()].some((node) => this.find(word.slice(i + 1), node));
      }
      if (!node.next.has(char)) {
        return false;
      }
      node = node.next.get(char)!;
    }

    return node.endOfWord;
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
