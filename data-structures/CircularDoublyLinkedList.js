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
// // console.log(circularDoublyLinkedList.pop());
// // console.log(circularDoublyLinkedList.pop());
// // console.log(circularDoublyLinkedList.pop());
// // console.log(circularDoublyLinkedList);
// // circularDoublyLinkedList.unShift(4);
// // circularDoublyLinkedList.unShift(3);
// // console.log(circularDoublyLinkedList.shift());
// console.log(circularDoublyLinkedList.get(1));
// circularDoublyLinkedList.print();
