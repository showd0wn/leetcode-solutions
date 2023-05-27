function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  // 排除 undefined 和 null
  while (obj != null) {
    if (obj.constructor === classFunction) {
      return true;
    }
    // 注意 Object.getPrototypeOf() 和 Reflect.getPrototypeOf() 的区别
    obj = Object.getPrototypeOf(obj);
  }
  return false;
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
