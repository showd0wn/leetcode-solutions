async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
  let val: number;

  return new Promise((resolve) => {
    const onFulfilled = (res) => {
      if (val === undefined) {
        val = res;
      } else {
        resolve(res + val);
      }
    };

    promise1.then(onFulfilled);
    promise2.then(onFulfilled);
  });
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
