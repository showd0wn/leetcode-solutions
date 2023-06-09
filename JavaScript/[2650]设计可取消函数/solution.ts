function cancellable<T>(generator: Generator<Promise<any>, T, unknown>): [() => void, Promise<T>] {
  let cancelled = false;

  const cancelFn = (): void => {
    cancelled = true;
  };

  const promise = new Promise<T>((resolve, reject) => {
    function next(ret: IteratorResult<Promise<any>, T>) {
      if (ret.done) {
        return resolve(ret.value);
      }
      ret.value
        .then((data) => next(cancelled ? generator.throw("Cancelled") : generator.next(data)))
        .catch((error) => next(cancelled ? generator.throw("Cancelled") : generator.throw(error)))
        .catch(reject);
    }

    next(generator.next());
  });

  return [cancelFn, promise];
}

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */
