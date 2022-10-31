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
class Publisher {

}

class Subscriber {

}

class Broker {

}


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