// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let count = 0;

    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {

    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    return this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      return this.head = null;
    }

    let node = this.head.next;
    let previous = this.head;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    return previous.next = null;
  }

  insertLast(data) {
    let last = this.getLast();
    if (last) {
      return last.next = new Node(data);
    } else {
      return this.head = new Node(data);
    }
  }

  getAt(ind) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === ind) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(ind) {
    if (!this.head) {
      return;
    }

    if (ind === 0) {
      return this.head = this.head.next;
    }
    const previous = this.getAt(ind - 1);
    const nextNode = this.getAt(ind + 1);
    return previous.next = nextNode;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

module.exports = { Node, LinkedList };
