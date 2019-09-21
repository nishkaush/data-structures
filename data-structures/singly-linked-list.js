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

  /**
   * adds an item to the end of the list
   */
  push(val) {
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

  /**
   * removes last item in the linked list
   */
  pop() {
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

  /**
   * removes an item from start of the list
   */
  shift() {
    if (this.length === 0) return undefined;
    let itemToShift = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) this.tail = null;
    return itemToShift;
  }

  /**
   * adds an item to the start of the list
   */
  unshift(val) {
    if (this.length === 0) return this.push(val);
    let currentHead = this.head;
    this.head = { val, next: currentHead };
    this.length += 1;
    return this;
  }

  /**
   * gets an item based of its pseudo index
   */
  get(ind) {
    if (this.length === 0 || ind >= this.length || ind < 0) return undefined;
    let flag = 0;
    let current = this.head;
    while (flag !== ind) {
      current = current.next;
      flag += 1;
    }
    return current;
  }

  /**
   * updates the value at a given node
   */
  set(ind, val) {
    let foundNode = this.get(ind);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  /**
   * find the element at the index and the one before it
   */
  insert(ind, val) {
    let nodeAtIndex = this.get(ind);
    let nodeAtPriorIndex = this.get(ind - 1);
    let newNode = new Node(val);

    if (ind > length || ind < 0 || this.length === 0) return;
    if (nodeAtIndex && nodeAtPriorIndex) {
      nodeAtPriorIndex.next = newNode;
      newNode.next = nodeAtIndex;
      this.length += 1;
      return true;
    } else if (!nodeAtIndex && nodeAtPriorIndex) {
      !!this.push(val);
    } else if (nodeAtIndex && !nodeAtPriorIndex) {
      !!this.unshift(val);
    }
  }

  /**
   * removes an item at a given index
   */
  remove(ind) {
    if (ind > this.length || ind < 0 || this.length === 0) return;
    if (ind === 0) return !!this.shift();
    if (ind === this.length - 1) return !!this.pop();

    let prevNode = this.get(ind - 1);
    let currentNode = this.get(ind);
    let nextNode = this.get(ind + 1);

    prevNode.next = nextNode;
    this.length -= 1;
    return currentNode;
  }

  /**
   * reverses the linked list in place
   */
}

let list = new SinglyLinkedList();
list.push("Howdy");
list.push("Max");
list.push("Whats");
list.push("Happening!");
list.reverse();

setTimeout(() => console.log(list), 1000);
