class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  Print() {
    if (this.isEmpty()) {
      return "empty";
    }
    let current = this.head;
    let listOfNodes = "";
    while (current) {
      listOfNodes += `${current.value} = >`;
      current = current.next;
    }
    listOfNodes += "null";
    console.log(listOfNodes);
  }
  Append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  Prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  RemoveFront() {
    if (this.isEmpty()) {
      this.tail = null;
      return "null";
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }
  RemoveFromEnd() {
    if (this.isEmpty()) {
      return null;
    } else {
      let prev = this.head;
      let value = this.tail.value;
      while (prev.next != this.tail) {
        console.log(prev);
        prev = prev.next;
      }
      prev.next = null;
    }
  }
}

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }
  Enqueue(value) {
    this.list.Append(value);
  }
}
