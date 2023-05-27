type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  events: Map<string, Callback[]>;

  constructor() {
    this.events = new Map();
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    const callbacks = this.events.get(eventName)!;
    callbacks.push(callback);

    const idx = callbacks.length - 1;
    return {
      unsubscribe: () => {
        callbacks.splice(idx, 1);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any {
    if (!this.events.has(eventName)) {
      return [];
    }
    return this.events.get(eventName)!.map((callback) => callback(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
