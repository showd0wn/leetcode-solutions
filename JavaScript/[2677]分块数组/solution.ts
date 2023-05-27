function chunk(arr: any[], size: number): any[][] {
  const res: any[] = [];

  for (const num of arr) {
    let lastChunk = res[res.length - 1];
    if (!lastChunk || lastChunk.length == size) {
      res.push([num]);
    } else {
      lastChunk.push(num);
    }
  }

  return res;
}
