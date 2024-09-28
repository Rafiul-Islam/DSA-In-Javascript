class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  isEmpty() {
    if (!this.head) console.log("Empty!");
    return !this.head;
  }

  unShift(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.isEmpty()) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    const temp = this.get(index);
    if (!temp) return false;
    temp.value = value;
    return true;
  }

  insert(index, value) {
    if (index === 0) return this.unShift(value);
    else if (index === this.length) return this.push(value);

    const prev = this.get(index - 1); //get the prev node of target
    if (!prev) return false;

    const newNode = new Node(value);
    const next = prev.next;
    prev.next = newNode;
    newNode.next = next;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else if (index === this.length) return undefined;
    const prev = this.get(index - 1);
    if (!prev) return undefined;
    const target = prev.next;
    prev.next = target.next;
    target.next = null;
    this.length--;
    return target;
  }

  reverse() {
    if (this.isEmpty()) return;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      let next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }

  print() {
    if (this.isEmpty()) return;
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

// const linkedList = new LinkedList(11);
// linkedList.push(3);
// linkedList.push(23);
// linkedList.push(7);
// linkedList.push(4);
// linkedList.pop();
// linkedList.pop();
// linkedList.unShift(5);
// linkedList.unShift(2);
// linkedList.shift();
// linkedList.get(0);
// linkedList.set(2, 80);
// linkedList.insert(2, 70);
// linkedList.insert(0, 1);
// linkedList.insert(1, 2);
// linkedList.insert(0, 200);
// linkedList.remove(11);
// linkedList.print();
// console.log("......................");
// linkedList.reverse();
// linkedList.print();
