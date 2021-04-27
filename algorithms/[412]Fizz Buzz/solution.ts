function fizzBuzz(n: number): string[] {
  return Array
    .from({ length : n }, (_, i) => {
      const val = i + 1;
      // 同时是 3 和 5 的倍数，转换成 15 的倍数
      if (val % 15 === 0) {
        return 'FizzBuzz';
      }
      if (val % 3 === 0) {
        return 'Fizz';
      }
      if (val % 5 === 0) {
        return 'Buzz';
      }
      return String(i + 1);
    })
}
