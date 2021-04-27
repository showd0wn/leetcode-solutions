// topics = ["并查集", "哈希表"]

export class UnionFind {
  parent: number[];
  rank: number[];
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array.from({ length: n }, () => 1);
  }
  union(i: number, j: number): void {
    const { parent, rank, find } = this;
    const x = find(i);
    const y = find(j);

    if (rank[x] <= rank[y]) {
      parent[x] = y;
    } else {
      parent[y] = x;
    }

    if (rank[x] === rank[y] && x !== y) {
      rank[y] += 1;
    }
  }
  find(x: number): number {
    const { parent, find } = this;

    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }

    return parent[x];
  }
}

function accountsMerge(accounts: string[][]): string[][] {
  // 哈希表 & 并查集
  const emailToIndex = new Map<string, number>();
  const emailToName = new Map<string, string>();
  let emailsCount = 0;

  for (const account of accounts) {
    const name = account[0];
    const size = account.length;
    for (let i = 1; i < size; i += 1) {
      const email = account[i];
      if (!emailToIndex.has(email)) {
        emailToIndex.set(email, emailsCount);
        emailToName.set(email, name);
        emailsCount += 1;
      }
    }
  }

  const uf = new UnionFind(emailsCount);
  for (const account of accounts) {
    const firstEmail = account[1];
    const firstIndex = emailToIndex.get(firstEmail)!;
    const size = account.length;
    for (let i = 2; i < size; i += 1) {
      const nextEmail = account[i];
      const nextIndex = emailToIndex.get(nextEmail)!;
      uf.union(firstIndex, nextIndex);
    }
  }

  const indexToEmails = new Map<number, string[]>();
  for (const email of emailToIndex.keys()) {
    const index = uf.find(emailToIndex.get(email)!);
    const account = indexToEmails.get(index) ?? [];
    account.push(email);
    indexToEmails.set(index, account);
  }

  return [...indexToEmails.values()].map((emails) => {
    emails.sort();
    const name = emailToName.get(emails[0])!;
    return [name, ...emails];
  });
}
