class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  push(value) {
    this.items[this.count] = value;
    this.count++;
    this.items.length = this.count;
    return this;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    const temp = this.items[this.count - 1];
    this.count--;
    return temp;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    const temp = this.items[this.count - 1];
    return temp;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = [];
    this.count = 0;
    return this;
  }

  search(value) {
    if (this.isEmpty()) return undefined;
    for (let i = 0; i < this.count; i++) {
      if (this.items[i] === value) return i;
    }
    return -1;
  }

  print() {
    for (let i = 0; i < this.count; i++) {
      console.log(`Index ${i}:`, this.items[i]);
    }
  }
}

const stack = new Stack();
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
stack.print();
