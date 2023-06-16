function sortBy(arr: any[], fn: Function): any[] {
  arr.sort((v1, v2) => fn(v1) - fn(v2));
  return arr;
}
