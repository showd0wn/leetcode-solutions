function objDiff(obj1: any, obj2: any): any {
  const res: { [key: string]: any } = {};
  for (const key of Object.keys(obj1)) {
    const v1 = obj1[key];
    const v2 = obj2[key];

    if (v1 === v2) {
      continue;
    }

    if (v2 === undefined) {
      continue;
    }

    if (typeof v1 !== "object" || typeof v2 !== "object") {
      res[key] = [v1, v2];
      continue;
    }

    if (Array.isArray(v1) !== Array.isArray(v2)) {
      res[key] = [v1, v2];
      continue;
    }

    const child = objDiff(v1, v2);
    if (Object.keys(child).length) {
      res[key] = child;
    }
  }
  return res;
}
