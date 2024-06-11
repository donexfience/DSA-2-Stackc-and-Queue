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
  Append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }
  Prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }
  RemoveFromEnd() {
    if (this.isEmpty()) {
      return null;
    } else {
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      }
      let current = this.head;
      const value = this.tail.value;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
      this.size--;
      return value;
    }
  }
  RemoveFromFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      if (this.isEmpty()) {
        this.tail = null;
      }
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }
  print() {
    let current = this.head;
    let listOfNodes = "";
    while (current) {
      listOfNodes += `${current.value} -> `;
      current = current.next;
    }
    listOfNodes += "null";
    console.log(listOfNodes);
  }
}
class Stack {
  constructor() {
    this.items = new LinkedList();
  }
  push(value) {
    this.items.prepend(value);
  }

  pop() {
    return this.items.removeFromFront();
  }
  peek() {
    return this.items.head ? this.items.head.value : "null";
  }
  isEmpty() {
    return this.isEmpty();
  }
}

const stack = new Stack();
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);
stack.push(16);
stack.push(17);
console.log("orginal stack")
stack.Print();
console.log("poping")
let popedvalue=stack.pop();
console.log(popedvalue);
console.log("after poping");
stack.Print();
