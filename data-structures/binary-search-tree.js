class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      this.root.left = null;
      this.root.right = null;
      return this;
    } else {
      // Steps for a loop
      // Step 1: start iterating through the tree starting at the root
      // Step 2: At each node check if newNode's value is greater or smaller than the given node
      // step 3: If greater, check if there is a node on the right
      // Step 4 : If there isn't, make newNode the node to the right
      // Step 5 : If there is, then check again if the newNode is greater than that node and keep repeating

      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.val === newNode.val) currentNode = null;
        else if (currentNode.val < newNode.val && !currentNode.right) {
          currentNode.right = newNode;
          currentNode = null;
        } else if (currentNode.val < newNode.val && currentNode.right) {
          currentNode = currentNode.right;
        } else if (currentNode.val > newNode.val && !currentNode.left) {
          currentNode.left = newNode;
          currentNode = null;
        } else if (currentNode.val > newNode.val && currentNode.left) {
          currentNode = currentNode.left;
        }
      }
      return this;
    }
  }
}

let bst = new BinarySearchTree();

bst.insert(90);
bst.insert(100);
bst.insert(1300);
bst.insert(50);
bst.insert(52);
bst.insert(52);
bst.insert(-1);
bst.insert(2);

console.log(bst);
