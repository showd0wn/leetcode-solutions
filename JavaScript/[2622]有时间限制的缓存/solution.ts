class TimeLimitedCache {
  cache: Map<number, number>;
  expire: Map<number, number>;

  constructor() {
    this.cache = new Map();
    this.expire = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    let result = this.existAndNotExpired(key);

    this.cache.set(key, value);
    this.expire.set(key, Date.now() + duration);

    return result;
  }

  get(key: number): number {
    if (this.existAndNotExpired(key)) {
      return this.cache.get(key)!;
    }
    return -1;
  }

  count(): number {
    const t = Date.now();
    for (let [key, et] of this.expire.entries()) {
      if (et <= t) {
        this.cache.delete(key);
        this.expire.delete(key);
      }
    }
    return this.cache.size;
  }

  private existAndNotExpired(key: number): boolean {
    return this.expire.has(key) && this.expire.get(key)! > Date.now();
  }
}

// 模拟：利用 clearTimeout 定时删除
// class TimeLimitedCache {
//   cache: Map<number, number>;
//   timer: Map<number, number>;

//   constructor() {
//     this.cache = new Map();
//     this.timer = new Map();
//   }

//   set(key: number, value: number, duration: number): boolean {
//     let result = false;

//     if (this.cache.has(key)) {
//       clearTimeout(this.timer.get(key));
//       result = true;
//     }

//     this.cache.set(key, value);
//     this.timer.set(
//       key,
//       setTimeout(() => {
//         this.cache.delete(key);
//       }, duration)
//     );

//     return result;
//   }

//   get(key: number): number {
//     if (this.cache.has(key)) {
//       return this.cache.get(key)!;
//     }
//     return -1;
//   }

//   count(): number {
//     return this.cache.size;
//   }
// }

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
