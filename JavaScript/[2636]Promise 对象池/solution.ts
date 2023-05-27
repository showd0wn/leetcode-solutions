type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
  const iter = functions.values();
  const worker = async () => {
    for (const fn of iter) {
      await fn();
    }
  };
  return Promise.allSettled(Array.from({ length: n }).map(worker));
}

// function promisePool(functions: F[], n: number): Promise<any> {
//   return new Promise((resolve) => {
//     const len = functions.length;
//     if (!len || !n) {
//       resolve([]);
//       return;
//     }

//     let c = 0;
//     let i = 0;

//     const fn = () => {
//       c += 1;
//       if (c == len) {
//         resolve([]);
//       } else if (i < len) {
//         functions[i]().then(fn);
//         i += 1;
//       }
//     };

//     for (i = 0; i < Math.min(len, n); i++) {
//       functions[i]().then(fn);
//     }
//   });
// }

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
