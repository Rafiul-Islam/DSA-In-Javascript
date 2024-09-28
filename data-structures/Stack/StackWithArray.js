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

  // reverse() {
  //   let start = 0;
  //   let end = this.count - 1;

  //   while (start < end) {
  //     const temp = this.items[start];
  //     this.items[start] = this.items[end];
  //     this.items[end] = temp;
  //     start++;
  //     end--;
  //   }
  // }

  insertAtBottom(value) {
    if (this.isEmpty()) {
      this.push(value);
    } else {
      const top = this.pop();
      this.insertAtBottom(value);
      this.push(top);
    }
  }

  reverse() {
    if (!this.isEmpty()) {
      const top = this.pop();
      this.reverse(top);
      this.insertAtBottom(top);
    }
  }

  print() {
    for (let i = 0; i < this.count; i++) {
      console.log(`Index ${i}:`, this.items[i]);
    }
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// // console.log(stack.pop());
// // console.log(stack.pop());
// // console.log(stack.peek());
// stack.print();
// console.log("------------------");
// stack.reverse();
// stack.print();
