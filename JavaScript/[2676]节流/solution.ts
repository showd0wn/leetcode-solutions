type F = (...args: any[]) => void;

function throttle(fn: F, t: number): F {
  let lt = 0;
  let timer;
  return function (...args) {
    const ct = Date.now();
    if (!lt || ct - lt > t) {
      lt = ct;
      fn(...args);
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      lt = Date.now();
      fn(...args);
    }, t - ct + lt);
  };
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
