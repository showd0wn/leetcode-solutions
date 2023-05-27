function areDeeplyEqual(o1: any, o2: any): boolean {
  // 基本类型: number & string & boolean (不包含 null)
  if (typeof o1 !== "object" && typeof o2 !== "object") {
    return o1 === o2;
  }

  if (o1 === null || o2 === null) {
    return o1 === o2;
  }

  // 引用类型: Object & Array
  if (Array.isArray(o1) != Array.isArray(o2)) {
    return false;
  }

  const k1 = Object.keys(o1);
  const k2 = Object.keys(o2);

  if (k1.length != k2.length) {
    return false;
  }

  for (const key of k1) {
    const v1 = o1[key];
    const v2 = o2[key];

    if (!areDeeplyEqual(v1, v2)) {
      return false;
    }
  }

  return true;
}
