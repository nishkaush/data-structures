class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  // Last In First Out Principle (LIFO)
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToStack(val) {
    // adding to the start of the list
    let newNode = new Node(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
    }

    this.size += 1;
    return this.size;
  }

  removeFromStack() {
    // removing from the start of the list
    if (this.size === 0) return null;
    let currentHead = this.head;

    if (this.size === 1) {
      [this.head, this.tail] = [null, null];
    } else {
      let nextNode = this.head.next;
      this.head = nextNode;
    }

    this.size -= 1;
    return this.size;
  }
}

let list = new Stack();

list.addToStack("FIRST");
list.addToStack("SECOND");
list.addToStack("THIRD");

list.removeFromStack();

setTimeout(() => {
  console.log(list);
}, 1000);
