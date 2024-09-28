class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.top.value;
  }

  get(value) {
    let currentNode = this.top;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === value) return value;
      currentNode = currentNode.next;
    }
    return -1;
  }

  reverse() {
    let currentNode = this.top;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      const next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    this.top = prev;
    return this;
  }

  clear() {
    if (this.isEmpty()) return undefined;
    else {
      this.pop();
      this.clear();
    }
  }

  print() {
    if (this.isEmpty()) return undefined;
    let currentNode = this.top;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

// const stack = new Stack(5);
// stack.push(6);
// stack.push(7);
// stack.push(8);
// // console.log(stack.peek());
// // console.log(stack.pop());
// stack.print();
// console.log("---------------");
// // stack.clear();
// stack.reverse();
// stack.print();
