function join(arr1: any[], arr2: any[]): any[] {
  const set = new Set<number>();
  arr1.forEach((v) => set.add(v.id));
  arr2.forEach((v) => set.add(v.id));

  const ids = [...set];
  ids.sort((a, b) => a - b);

  const map1 = new Map(arr1.map((v) => [v.id, v]));
  const map2 = new Map(arr2.map((v) => [v.id, v]));

  return ids.map((id) => Object.assign({}, map1.get(id), map2.get(id)));
}
