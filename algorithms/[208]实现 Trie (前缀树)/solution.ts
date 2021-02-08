// topics = ["字典树"]

class TrieNode {
  endOfWord: boolean;

  next: Map<string, TrieNode>;

  constructor(endOfWord = false) {
    this.endOfWord = endOfWord;
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

    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];
      if (!node.next.has(char)) {
        node.next.set(char, new TrieNode());
      }
      node = node.next.get(char)!;
    }

    node.endOfWord = true;
  }

  search(word: string): boolean {
    let node = this.root;

    for (const char of word) {
      if (!node.next.has(char)) {
        return false;
      }
      node = node.next.get(char)!;
    }

    return node.endOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;

    for (const char of prefix) {
      if (!node.next.has(char)) {
        return false;
      }
      node = node.next.get(char)!;
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
