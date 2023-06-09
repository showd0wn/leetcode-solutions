type Obj = Record<any, any>;

function compactObject(obj: Obj): Obj {
  let res: Obj;
  if (Array.isArray(obj)) {
    res = [];
    for (let val of Object.values(obj)) {
      if (typeof val === "object" && val !== null) {
        res.push(compactObject(val));
      } else if (Boolean(val)) {
        res.push(val);
      }
    }
  } else {
    res = {};
    for (let [key, val] of Object.entries(obj)) {
      if (typeof val === "object" && val !== null) {
        res[key] = compactObject(val);
      } else if (Boolean(val)) {
        res[key] = val;
      }
    }
  }
  return res;
}
