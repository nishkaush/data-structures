class Node {
  constructor(val) {
    this.prev = null;
    this.next = null;
    this.val = val;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    // case 1 : no items exist
    // --> make the newNode to be the sole head and tail
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // case 2: some items exist
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return;
    let currentTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return currentTail;
    }
    let penultimateNode = this.tail.prev;
    this.tail = penultimateNode;
    this.tail.next = null;
    this.length -= 1;
    currentTail.prev = null;
    return currentTail;
  }

  shift() {
    if (this.length === 0) return;
    let currentHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let nextNode = this.head.next;
      this.head = nextNode;
      this.head.prev = null;
      currentHead.next = null;
    }
    this.length -= 1;
    return currentHead;
  }

  unshift(val) {
    //adding a node to the front
    if (this.length === 0) return this.push(val);
    let newNode = new Node(val);
    let currentHead = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.head.next = currentHead;
    this.length += 1;
    return this;
  }

  get(index) {
    if (this.length === 0 || index >= this.length || index < 0) return null;
    let startFromHead = this.length / 2 > index ? true : false;
    let currentNode = startFromHead ? this.head : this.tail;
    let counter = startFromHead ? 0 : this.length - 1;

    let foundNode = null;
    for (var i = 0; i < this.length; i++) {
      if (counter === index) {
        foundNode = currentNode;
        return foundNode;
      }
      currentNode = startFromHead ? currentNode.next : currentNode.prev;
      counter = startFromHead ? counter + 1 : counter - 1;
    }
  }

  set(ind, val) {
    let foundItem = this.get(ind);

    if (foundItem) {
      foundItem.val = val;
      return true;
    }
    return false;
  }

  insert(ind, val) {
    if (ind < 0 || ind > this.length) return false;
    if (ind === 0) return !!this.unshift(val);
    if (ind === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let foundItem = this.get(ind);

    if (foundItem) {
      let foundItemPrevNode = foundItem.prev;
      foundItem.prev = newNode;
      newNode.next = foundItem;
      foundItemPrevNode.next = newNode;
      newNode.prev = foundItemPrevNode;
      this.length += 1;
      return true;
    }
  }

  remove(ind) {
    if (ind < 0 || ind >= this.length) return false;
    if (ind === 0) return this.shift();
    if (ind === this.length - 1) return this.pop();

    let foundItem = this.get(ind);

    let prevItem = foundItem.prev;
    let nextItem = foundItem.next;

    foundItem.prev = null;
    foundItem.next = null;
    prevItem.next = nextItem;
    nextItem.prev = prevItem;
    this.length -= 1;
    return foundItem;
  }
}

let list = new DoublyLinkedList();

list.push("hahahah");
list.push("lmao");
list.push("wtf");
list.push("duno");
list.push("bruh");
list.push("mofo");
list.insert(0, 1000);

setTimeout(() => console.log(list), 2000);
