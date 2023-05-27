function jsonStringify(object: any): string {
  if (object === null) {
    return "null";
  }

  if (typeof object === "number" || typeof object === "boolean") {
    return object.toString();
  }

  if (typeof object === "string") {
    return `"${object}"`;
  }

  const isArray = Array.isArray(object);
  let res = "";

  for (const [key, value] of Object.entries(object)) {
    if (res) {
      res += ",";
    }
    if (isArray) {
      res += jsonStringify(value);
    } else {
      res += `"${key}":` + jsonStringify(value);
    }
  }

  return isArray ? `[${res}]` : `{${res}}`;
}
