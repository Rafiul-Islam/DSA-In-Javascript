class Queue {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  enQueue(value) {
    this.items[this.length] = value;
    this.length++;
    return this;
  }

  deQueue() {
    if (this.isEmpty()) return undefined;
    const temp = this.items[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.length--;
    return temp;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[0];
  }

  search(value) {
    if (this.isEmpty()) return undefined;
    for (let i = 0; i < this.length; i++) {
      if (this.items[i] === value) return i;
    }
    return -1;
  }

  clear() {
    if (this.isEmpty()) return undefined;
    this.deQueue();
    this.clear();
  }

  reverse() {
    let start = 0;
    let end = this.length - 1;
    while (start < end) {
      const temp = this.items[start];
      this.items[start] = this.items[end];
      this.items[end] = temp;
      start++;
      end--;
    }
    return this;
  }

  print() {
    for (let i = 0; i < this.length; i++) {
      console.log(this.items[i]);
    }
  }
}

// const queue = new Queue();
// queue.enQueue(5);
// queue.enQueue(6);
// queue.enQueue(7);
// // console.log(queue.deQueue());
// queue.print();
// console.log("-------------------");
// // queue.clear();
// queue.reverse();
// queue.print();
