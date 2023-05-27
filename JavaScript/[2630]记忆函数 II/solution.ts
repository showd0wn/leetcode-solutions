type Fn = (...params: any) => any;

class TrieNode {
  value: any;

  next: Map<any, TrieNode>;

  constructor() {
    this.next = new Map();
  }
}

function memoize(fn: Fn): Fn {
  const root = new TrieNode();

  return function (...args) {
    let iter = root;

    for (const arg of args) {
      if (!iter.next.has(arg)) {
        iter.next.set(arg, new TrieNode());
      }
      iter = iter.next.get(arg)!;
    }

    if (iter.value === undefined) {
      iter.value = fn(...args);
    }

    return iter.value;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
