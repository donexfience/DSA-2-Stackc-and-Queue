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

  print() {
    if (this.isEmpty()) {
      console.log("empty");
      return;
    }
    let current = this.head;
    let listOfNodes = "";
    while (current) {
      listOfNodes += `${current.value} => `;
      current = current.next;
    }
    listOfNodes += "null";
    console.log(listOfNodes);
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      if (this.isEmpty()) {
        this.tail = null;
      }
      return value;
    }
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    } else {
      const value = this.tail.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        while (current.next !== this.tail) {
          current = current.next;
        }
        current.next = null;
        this.tail = current;
      }
      this.size--;
      return value;
    }
  }
}

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFront();
  }

  peek() {
    if (this.list.isEmpty()) {
      return null;
    }
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  print() {
    this.list.print();
  }
}
class QueueUsingStacks {
  constructor() {
    this.stack1 = new LinkedListStack();
    this.stack2 = new LinkedListStack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.peek();
  }

  isEmpty() {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
  }

  print() {
    if (!this.stack2.isEmpty()) {
      console.log("Elements from front to rear:");
      this.stack2.print();
    }
    if (!this.stack1.isEmpty()) {
      console.log("Elements from rear to front (in reverse order):");
      this.stack1.print();
    }
  }
}

// Testing the QueueUsingStacks implementation
const queue = new QueueUsingStacks();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.dequeue()); // Should print: 10
queue.print(); // Should print remaining elements in queue order
console.log(queue.peek()); // Should print: 20
console.log(queue.isEmpty()); // Should print: false
