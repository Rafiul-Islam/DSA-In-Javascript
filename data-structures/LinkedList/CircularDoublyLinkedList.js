class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.head.prev = this.head;
      this.head.next = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
    temp.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }

  unShift(value) {
    if (this.isEmpty()) return this.push(value);
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.head.prev = this.tail;
    this.tail.next = this.head;
    this.length++;
    return this;
  }

  shift() {
    if (this.isEmpty()) return undefined;
    if (this.length === 1) return this.pop();
    const temp = this.head;
    this.head = this.head.next;
    this.head.prev = this.tail;
    this.tail.next = this.head;
    temp.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }

  get(index) {
    if (this.isEmpty()) return undefined;
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = this.head;
    if (this.length / 2 < index) {
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
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
    if (this.isEmpty() || index === this.length) return this.push(value);
    if (index === 0) return this.unShift(value);
    let before = this.get(index - 1);
    if (!before) return false;
    let after = before.next;
    const newNode = new Node(value);
    newNode.prev = before;
    newNode.next = after;
    before.next = newNode;
    after.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index === this.length) return undefined;
    let before = this.get(index - 1);
    if (!before) return undefined;
    let target = before.next;
    let after = target.next;
    before.next = after;
    after.prev = before;
    target.prev = null;
    target.next = null;
    this.length--;
    return target;
  }

  reverse() {
    if (this.isEmpty()) return undefined;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prev = this.head;
    for (let i = 0; i < this.length; i++) {
      const next = currentNode.next;
      currentNode.next = prev;
      currentNode.prev = next;
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

// const circularDoublyLinkedList = new CircularDoublyLinkedList();
// circularDoublyLinkedList.push(5);
// circularDoublyLinkedList.push(6);
// circularDoublyLinkedList.push(7);
// circularDoublyLinkedList.push(8);
// console.log(circularDoublyLinkedList.pop());
// console.log(circularDoublyLinkedList.pop());
// console.log(circularDoublyLinkedList.pop());
// console.log(circularDoublyLinkedList);
// circularDoublyLinkedList.unShift(4);
// circularDoublyLinkedList.unShift(3);
// console.log(circularDoublyLinkedList.shift());
// console.log(circularDoublyLinkedList.get(1));
// circularDoublyLinkedList.insert(1, 4);
// circularDoublyLinkedList.insert(0, 3);
// console.log(circularDoublyLinkedList.remove(1));
// circularDoublyLinkedList.print();
// console.log("--------------------------");
// circularDoublyLinkedList.reverse();
// circularDoublyLinkedList.print();
