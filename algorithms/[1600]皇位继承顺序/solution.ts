// topics = ["设计", "树"]

class ThroneInheritance {
  edges: Map<string, string[]>;
  dead: Set<string>;
  king: string;
  constructor(kingName: string) {
    this.edges = new Map();
    this.dead = new Set();
    this.king = kingName;
  }

  birth(parentName: string, childName: string): void {
    if (!this.edges.has(parentName)) {
      this.edges.set(parentName, []);
    }
    this.edges.get(parentName)!.push(childName);
  }

  death(name: string): void {
    this.dead.add(name);
  }

  /**
   * 多叉树前序遍历
   * time O(n), space O(n), n 为总人数
   */
  getInheritanceOrder(): string[] {
    const res: string[] = [];

    const preorder = (name: string): void => {
      if (!this.dead.has(name)) {
        res.push(name);
      }
      if (this.edges.has(name)) {
        for (const childName of this.edges.get(name)!) {
          preorder(childName);
        }
      }
    };

    preorder(this.king);

    return res;
  }
}

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
