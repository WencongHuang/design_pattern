// Design Pattern:
// Observable, Publisher/Subscriber, Singleton

// ===================================Observable Design Pattern===================================
// Declaration for a subject, where if there is any changes, it will notify the observers.
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notifyAll() {
    this.observers.forEach((observer) => observer);
  }
}

// Declaration for a observer, just a simple function.
function notify(index) {
  console.log("Observer " + index + " is notified!");
}

let theSubject = new Observable();

let observer1 = new notify(1);
let observer2 = new notify(2);
let observer3 = new notify(3);

theSubject.subscribe(observer1);
theSubject.subscribe(observer2);
theSubject.subscribe(observer3);

theSubject.notifyAll();

// ===================================Publisher/Subscriber Design Pattern===================================
class Pubsub {
  constructor() {
    this.events = {};
  }

  subscription(eventName, func) {
    return {
      subscribe: () => {
        if (this.events[eventName]) {
          this.events[eventName].push(func);
          console.log(`${func.name} has subscribed to ${eventName} Topic!`);
        } else {
          this.events[eventName] = [func];
          console.log(`${func.name} has subscribed to ${eventName} Topic!`);
        }
      },

      unsubscribe: () => {
        if (this.events[eventName]) {
          this.events[eventName] = this.events[eventName].filter(
            (subscriber) => subscriber !== func
          );
          console.log(`${func.name} has unsubscribed from ${eventName} Topic!`);
        }
      },
    };
  }

  publish(eventName, ...args) {
    const funcs = this.events[eventName];
    if (Array.isArray(funcs)) {
      funcs.forEach((func) => {
        func.apply(null, args);
      });
    }
  }
}

const speak = (param) => {
  console.log(`I am ${param}`);
};

const greetAll = (x, y, z) => {
  console.log(`Hello ${x}, ${y}, ${z}`);
};

const pubsub = new Pubsub();

pubsub.subscription("greet", greetAll).subscribe(); // prints greetAll has subscribed to greet Topic!

pubsub.subscription("sayName", speak).subscribe(); // prints speak has subscribed to sayName Topic!
pubsub.subscription("sayName", greetAll).unsubscribe(); // prints greetAll has unsubscribed from sayName Topic!

pubsub.publish("greet", "Lawrence Eagles", "John Doe", "Jane Doe"); // prints Hello Lawrence Eagles, John Doe, Jane Doe

pubsub.publish("sayName", "Edmond Huang"); // prints I am Edmond Huang

// ===================================Singleton Design Pattern===================================
let instance;
class Counter {
  constructor(initialCount = 0) {
    this.count = initialCount;

    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return this.count;
  }

  increment() {
    return ++this.count;
  }

  decrement() {
    return --this.count;
  }
}

let count1 = new Counter();
count1.increment();
count1.increment();
console.log(count1.getCount());
// let count2 = new Counter(); // Will throw an Error if we want to create more than one Counter.
