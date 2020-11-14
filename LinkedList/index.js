class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.first;
    this.last;
    this.listSize = 0;
  }
  addFirst(item) {
    const node = new Node(item);
    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.listSize++;
  }
  addLast(item) {
    const node = new Node(item);
    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.listSize++;
  }
  removeFirst() {
    if (this.isEmpty()) throw new Error("The LinkedList is empty");
    if (this.first == this.last) {
      this.first = null;
      this.last = null;
    } else {
      const secondNode = this.first.next;
      this.first.next = null; // uses js garbage collector to empty memory;
      this.first = secondNode;
    }
    this.listSize--;
  }
  removeLast() {
    if (this.isEmpty()) throw new Error("The LinkedList is empty");
    if (this.first == this.last) {
      this.first = null;
      this.last = null;
    } else {
      const previous = this.getPrevious(this.last);
      this.last = previous;
      this.last.next = null;
    }
    this.listSize--;
  }
  getPrevious(node) {
    let current = this.first;
    while (current != null) {
      if (current.next == node) return current;
      current = current.next;
    }
    return null;
  }
  contains(item) {
    return this.indexOf(item) != -1;
  }
  indexOf(item) {
    let index = 0;
    let current = this.first;
    while (current != null) {
      if (current.value == item) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  isEmpty() {
    return this.first == null ? true : false;
  }
  size() {
    return this.listSize;
  }
  toArray() {
    let arr = new Array();
    let current = this.first;
    while (current != null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
  reverse() {
    if (this.isEmpty()) return;

    let previous = this.first;
    let current = this.first.next;
    while (current != null) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      console.log(current);
    }

    let last = this.first;
    last.next = null;
    this.first = previous;
  }
}

const list = new LinkedList();

list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.addLast(50);
list.addLast(60);

console.log(list.reverse());
