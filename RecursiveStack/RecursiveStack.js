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

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.isEmpty()) {
      this.tail = null;
    }
    return value;
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
    return this.items.isEmpty();
  }

  print() {
    this.items.print();
  }
}

function RecursiveRemovalOfStack(stack) {
  if (stack.isEmpty()) {
    return;
  }
  const value = stack.pop();
  RecursiveRemovalOfStack(stack);
  if (value % 2 !== 0) {
    stack.push(value);
  }
}

function removeEven(stack) {
  const tempStack = new Stack();
  while (!stack.isEmpty()) {
    const value = stack.pop();
    if (value % 2 !== 0) {
      tempStack.push(value);
    }
  }

  // Move elements back to the original stack to maintain the original order
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

// Example usage
const stack = new Stack();
const stack2 = new Stack();

stack2.push(20);
stack2.push(21);
stack2.push(23);
stack2.push(22);
stack2.push(24);
stack2.push(25);

stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);
stack.push(16);
stack.push(17);

console.log("Original stack:");
stack.print();

console.log("Stack2 before removing even numbers:");
stack2.print();

removeEven(stack2);

console.log("Stack2 after removing even numbers:");
stack2.print();

RecursiveRemovalOfStack(stack);

console.log("Stack after removing even numbers using recursion:");
stack.print();
