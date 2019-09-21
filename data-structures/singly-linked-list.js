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
    let newNode = new Node(val);

    if (this.length === 0) {
      //assume this is the very first node
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if list already has one or more items
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    console.log("running pop");
    //removes last item in the linked list
    if (this.length === 0) return undefined;
    let current = this.head;
    let itemToPop = null;
    let newtail = current;
    while (current) {
      !current.next ? (itemToPop = current) : (newtail = current);
      current = current.next;
    }
    this.tail = newtail;
    this.tail.next = null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length -= 1;
    return itemToPop;
  }

  shift() {
    //get this.head and save it
    if (this.length === 0) return undefined;
    let itemToShift = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) this.tail = null;
    return itemToShift;
  }
}

let list = new SinglyLinkedList();
list.push("Howdy");
list.push("Max");
list.push("Whats");
list.push("Happening!");

setTimeout(() => console.log(list, shifted), 1000);
