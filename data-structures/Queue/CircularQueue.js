class CircularQueue {
  constructor(capasity) {
    this.items = new Array(capasity);
    this.capasity = capasity;
    this.size = 0;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capasity;
  }

  enQuque(value) {
    if (this.isFull()) {
      console.log("Queue is full");
      return undefined;
    }
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.capasity;
    }
    this.items[this.rear] = value;
    this.size++;
  }

  deQuque() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return undefined;
    }
    const element = this.items[this.front];
    this.size--;

    if (this.size === 0) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capasity;
    }
    return element;
  }

  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[this.front];
  }

  getSize() {
    return this.size;
  }

  printQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let result = [];
    let i = this.front;
    for (let count = 0; count < this.size; count++) {
      result.push(this.items[i]);
      i = (i + 1) % this.capasity;
    }
    console.log("Queue:", result.join(" <- "));
  }
}

// const queue = new CircularQueue(5);
// queue.enQuque(1);
// queue.enQuque(2);
// queue.enQuque(3);
// queue.enQuque(4);

// queue.printQueue();
