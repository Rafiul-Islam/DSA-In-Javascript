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

  print() {
    if (this.isEmpty()) return undefined;
    let currentNode = this.head;
    do {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    } while (currentNode !== this.head);
  }
}

const circularDoublyLinkedList = new CircularDoublyLinkedList();
circularDoublyLinkedList.push(5);
circularDoublyLinkedList.push(6);
circularDoublyLinkedList.push(7);
console.log(circularDoublyLinkedList.pop());
console.log(circularDoublyLinkedList.pop());
console.log(circularDoublyLinkedList.pop());
// console.log(circularDoublyLinkedList);
circularDoublyLinkedList.print();
