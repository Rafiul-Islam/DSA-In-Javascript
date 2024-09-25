class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularSinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return !this.head;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      this.tail.next = this.head;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  unShift(value) {
    if (this.isEmpty()) return this.push(value);
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.tail.next = this.head;
    this.length++;
    return this;
  }

  shift() {
    if (this.isEmpty()) return undefined;
    if (this.length === 1) return this.pop();
    const temp = this.head;
    this.head = this.head.next;
    this.tail.next = this.head;
    temp.next = null;
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, value) {
    const targetNode = this.get(index);
    if (!targetNode) return false;
    targetNode.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) return this.unShift(value);
    if (index === this.length) return this.push(value);
    const before = this.get(index - 1);
    if (!before) return false;
    const newNode = new Node(value);
    newNode.next = before.next;
    before.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index === this.length) return undefined;
    const before = this.get(index - 1);
    if (!before) return false;
    const targetNode = before.next;
    before.next = targetNode.next;
    targetNode.next = null;
    this.length--;
    return targetNode;
  }

  reverse() {
    if (this.isEmpty()) return undefined;
    let currentNode = this.head;
    let prev = this.tail;
    let next = null;
    this.head = this.tail;
    this.tail = currentNode;
    for (let i = 0; i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }

  print() {
    if (this.isEmpty()) return undefined;
    let currentNode = this.head;
    do {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    } while (currentNode !== this.head);
  }
}

// const circularSinglyLinkedList = new CircularSinglyLinkedList();
// circularSinglyLinkedList.push(5);
// circularSinglyLinkedList.push(6);
// circularSinglyLinkedList.push(7);
// console.log(circularSinglyLinkedList.pop());
// console.log(circularSinglyLinkedList.pop());
// console.log(circularSinglyLinkedList.pop());
// console.log(circularSinglyLinkedList.pop());
// circularSinglyLinkedList.unShift(4);
// circularSinglyLinkedList.unShift(3);
// console.log(circularSinglyLinkedList.shift());
// console.log(circularSinglyLinkedList.shift());
// console.log(circularSinglyLinkedList.shift());
// console.log(circularSinglyLinkedList.get(1));
// circularSinglyLinkedList.insert(1, 4);
// circularSinglyLinkedList.remove(1);
// circularSinglyLinkedList.print();
// console.log("------------------");
// circularSinglyLinkedList.reverse();
// circularSinglyLinkedList.print();
// console.log(circularSinglyLinkedList);
