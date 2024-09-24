class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  isEmpty() {
    if (this.length === 0) console.log("Empty");
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
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
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unShift(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.isEmpty()) return undefined;
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (this.isEmpty()) return undefined;
    if (index < 0 || index >= this.length) {
      console.log("Out Of Range");
      return undefined;
    }
    let currentNode = this.head;
    if (index < this.length / 2) {
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
    if (index === 0) return this.unShift(value);
    if (index === this.length) return this.push(value);
    const before = this.get(index - 1);
    const after = before?.next;
    if (!before || !after) return false;
    const newNode = new Node(value);
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const temp = this.get(index);
    if (!temp) return false;
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }

  reverse() {
    if (this.isEmpty()) return undefined;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    for (let i = 0; i < this.length; i++) {
      let after = currentNode.next;
      let before = currentNode.prev;
      currentNode.prev = after;
      currentNode.next = before;
      currentNode = currentNode.prev;
    }
    return this;
  }

  print() {
    if (this.isEmpty()) return undefined;
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const doublyLinkedList = new DoublyLinkedList(5);
doublyLinkedList.push(6);
doublyLinkedList.push(7);
// doublyLinkedList.pop();
// doublyLinkedList.pop();
// doublyLinkedList.pop();
// doublyLinkedList.unShift(4);
// doublyLinkedList.unShift(3);
// doublyLinkedList.shift();
// doublyLinkedList.shift();
// doublyLinkedList.shift();
// doublyLinkedList.print();
// doublyLinkedList.get(2);
// doublyLinkedList.set(2, 10);
// doublyLinkedList.set(20, 10);
// doublyLinkedList.insert(0, 4);
// doublyLinkedList.insert(2, 20);
// doublyLinkedList.remove(1);
doublyLinkedList.print();
console.log("-----------------------");
doublyLinkedList.reverse();
doublyLinkedList.print();
