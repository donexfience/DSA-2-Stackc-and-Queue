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
  Print() {
    let current = this.head;
    let listOfNodes = "";
    while (current) {
      listOfNodes += `${current.value} -> `;
      current = current.next;
    }
    listOfNodes + "null";
    console.log(listOfNodes);
  }
  Append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }
  Prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  }
  RemoveFromFront() {
    const value = this.head.value;
    if (this.isEmpty()) {
      return "null";
    }
    this.head = this.head.next;
    this.size--;
    return value;
  }
  RemoveFromEnd() {
    if (this.isEmpty()) {
      return "null";
    } else {
      const value = this.tail.value;
      let current = this.head;
      while (current.next != this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
  }
}

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }
  push(value) {
    this.list.Prepend(value);
  }
  Pop() {
    this.list.RemoveFromFront();
  }
  Peek() {
    return this.list.tail.value;
  }
  isFull() {
    this.list.isEmpty();
  }
  Print() {
    this.list.Print();
  }
}

const stack = new LinkedListStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(40);
stack.Print();
const peek = Peek();
console.log(peek);
