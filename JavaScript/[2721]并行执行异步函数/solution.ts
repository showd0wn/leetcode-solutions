async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  const result: T[] = [];
  const total = functions.length;
  let count = 0;

  return new Promise((resolve, reject) => {
    functions.forEach((fn, idx) => {
      fn()
        .then((data) => {
          result[idx] = data;
          if (++count == total) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
