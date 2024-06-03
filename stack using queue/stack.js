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

  removeFromFront() {
    if (this.isEmpty()) {
      return "list is empty";
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
      return "null";
    }
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

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }
  Enqeue(value) {
    this.list.Append(value);
  }
  Deqeue() {
    return this.list.RemoveFront();
  }
  Peek() {
    return this.tail ? this.tail.value : "null";
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  Print() {
    return this.list.Print();
  }
}
class StackUsingQueue {
  constructor() {
    this.queue1 = new LinkedListQueue();
    this.queue2 = new LinkedListQueue();
  }
  push(value) {
    this.queue2.Enqueue(value);
    if (!this.queue1.isEmpty()) {
      this.queue2.Enqueue(this.queue1.Deqeue());
    }
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }
  pop() {
    return this.queue1.Deqeue();
  }

  top() {
    return this.queue1.peek();
  }

  isEmpty() {
    return this.queue1.isEmpty();
  }

  print() {
    this.queue1.print();
  }
}
const stack = new StackUsingQueue();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.pop()); // Should print: 40
console.log(stack.top()); // Should print: 30
stack.push(50);
console.log(stack.pop()); // Should print: 50
console.log(stack.pop()); // Should print: 30
console.log(stack.pop()); // Should print: 20
console.log(stack.isEmpty()); // Should print: false
stack.print(); // Should print: 10 => null
console.log(stack.pop()); // Should print: 10
console.log(stack.isEmpty()); // Should print: true
