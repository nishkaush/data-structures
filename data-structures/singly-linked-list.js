class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    //create a new node with a given value
    //assume this is the very first node
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    //if list already has only one item
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  pop() {
    //removes last item in the linked list
    // this.tail =
  }
}

let list = new SinglyLinkedList();
list.push("Howdy");
list.push("Modi");
list.push("Whats");
list.push("Happening!");

console.log(list);
