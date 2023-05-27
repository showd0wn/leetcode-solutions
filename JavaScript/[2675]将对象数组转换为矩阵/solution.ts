type MatrixValue = string | number | boolean | null;
type MatrixValueObject = { [key: string]: MatrixValue };

function jsonToMatrix(arr: any[]): MatrixValue[][] {
  // 解析每一行数据
  const rows = Array.from({ length: arr.length }, (): MatrixValueObject => ({}));
  // 表头数据
  const head = new Set<string>();

  for (const [idx, val] of arr.entries()) {
    flatObject(val, "", rows[idx]);

    for (const key of Object.keys(rows[idx])) {
      head.add(key);
    }
  }

  // 待生成的矩阵，第一行是表头
  const m: MatrixValue[][] = [[...head].sort()];

  for (const row of rows) {
    m.push([]);
    for (const key of m[0]) {
      const val = row[key as string];
      m[m.length - 1].push(val === undefined ? "" : val);
    }
  }

  return m;
}

// 把嵌套的数据结构扁平化
function flatObject(obj: any, prefix: string, res: MatrixValueObject): void {
  if (typeof obj !== "object") {
    res[prefix] = obj;
    return;
  }

  if (obj === null) {
    res[prefix] = null;
    return;
  }

  for (const [key, value] of Object.entries(obj)) {
    flatObject(value, prefix ? `${prefix}.${key}` : key, res);
  }
}
