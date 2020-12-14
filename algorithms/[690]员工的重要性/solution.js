/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
const GetImportance = function(employees, id) {
  const map = new Map();
  employees.forEach(({ id, importance, subordinates }) => {
    map.set(id, { value: importance, employee: subordinates });
  });

  let res = 0;
  const queue = [id];
  while (queue.length !== 0) {
    const head = queue.shift();
    const { value, employee } = map.get(head);
    
    res += value;

    if (employee.length) {
      queue.push(...employee);
    }
  }

  return res;
};

// dfs
const GetImportance2 = function(employees, id) {
  const map = new Map();
  employees.forEach(({ id, importance, subordinates }) => {
    map.set(id, { value: importance, employee: subordinates });
  });
  
  let res = 0;
  const dfs = function(k = id) {
    const { value, employee } = map.get(k);
    res += value;
    employee.forEach(e => dfs(e));
  };

  dfs();

  return res;
};
