class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.value === value) return;
        if (currentNode.value > value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return;
          } else currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return;
          } else currentNode = currentNode.right;
        }
      }
    }
  }

  BFS() {
    let currentNode = this.root;
    const result = [];
    const queue = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return result;
  }
}

const bst = new BST();
bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(18);
bst.insert(27);
bst.insert(52);
bst.insert(82);

console.log(bst.root);
console.log(bst.BFS());
