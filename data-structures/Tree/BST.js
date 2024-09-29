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

  isEmpty() {
    return !this.root;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.isEmpty()) return false;
    let temp = this.root;
    while (temp) {
      if (value === temp.value) return true;
      if (value < temp.value) temp = temp.left;
      else temp = temp.right;
    }
    return false;
  }

  minValueNode(currentNode = this.root) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  maxValueNode(currentNode = this.root) {
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }
}

// const bst = new BST();
// bst.insert(5);
// bst.insert(11);
// bst.insert(2);
// bst.insert(10);
// bst.insert(6);
// bst.insert(5);
// bst.insert(11);
// bst.insert(1);
// console.log(bst);
// console.log(bst.minValueNode());
// console.log(bst.maxValueNode());
