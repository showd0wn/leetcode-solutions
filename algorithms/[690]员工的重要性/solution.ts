// topics = ["哈希表", "广度优先搜索"]

/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

class Employee {
  id: number;
  importance: number;
  subordinates: number[];
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = id === undefined ? 0 : id;
    this.importance = importance === undefined ? 0 : importance;
    this.subordinates = subordinates === undefined ? [] : subordinates;
  }
}

function getImportance(employees: Employee[], id: number): number {
  const map = new Map<number, Employee>();
  for (const employee of employees) {
    map.set(employee.id, employee);
  }

  const curr = map.get(id);
  if (!curr) return 0;

  let res = curr.importance;
  const queue = curr.subordinates;
  while (queue.length) {
    const nextId = queue.shift()!;
    const nextEmploy = map.get(nextId)!;
    res += nextEmploy.importance;
    queue.push(...nextEmploy.subordinates);
  }

  return res;
}
