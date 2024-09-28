class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  enQueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  deQueuue() {
    if (this.isEmpty()) return undefined;
    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  peek() {
    return this.first.value;
  }

  search(value) {
    if (this.isEmpty()) return undefined;
    let currentNode = this.first;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === value) return i;
      currentNode = currentNode.next;
    }
    return -1;
  }

  clear() {
    if (this.isEmpty()) return undefined;
    this.deQueuue();
    this.clear();
  }

  reverse() {
    let currentNode = this.first;
    this.first = this.last;
    this.last = currentNode;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      const next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }

  print() {
    if (this.isEmpty()) return undefined;
    let currentNode = this.first;
    for (let i = 0; i < this.length; i++) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

// const queue = new Queue(5);
// queue.enQueue(6);
// queue.enQueue(7);
// queue.enQueue(8);
// // console.log(queue.deQueuue());
// // console.log(queue.deQueuue());
// queue.print();
// console.log("----------------");
// queue.reverse();
// queue.print();
