declare global {
  interface Function {
    callPolyfill(context: Record<PropertyKey, any>, ...args: any[]): any;
  }
}

// 使用 Symbol, 避免属性冲突，且 symbol 值作为键在迭代中不可枚举
Function.prototype.callPolyfill = function (context, ...args): any {
  const key = Symbol();
  context[key] = this;
  const res = context[key](...args);
  delete context[key];
  return res;
};

Function.prototype.callPolyfill = function (context, ...args): any {
  Reflect.defineProperty(context, "fn", {
    value: this,
    enumerable: false,
  });
  const res = context.fn(...args);
  Reflect.deleteProperty(context, "fn");
  return res;
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
