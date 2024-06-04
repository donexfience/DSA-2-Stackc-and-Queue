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

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
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

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  print() {
    this.list.print();
  }

  peek() {
    return this.list.head ? this.list.head.value : null;
  }

  isEmpty() {
    return this.list.isEmpty();
  }
}

class StackUsingQueue {
  constructor() {
    this.q1 = new LinkedListQueue();
    this.q2 = new LinkedListQueue();
  }
  push(value) {
    if (this.q1.isEmpty()) {
      this.q1.enqueue(value);
      while (!this.q2.isEmpty()) {
        this.q1.enqueue(this.q2.dequeue());
      }
    } else {
      this.q2.enqueue(value);
      while (!this.q1.isEmpty()) {
        this.q2.enqueue(this.q1.dequeue());
      }
    }
  }
  pop() {
    if (!this.q1.isEmpty()) {
      return this.q1.dequeue();
    } else if (!this.q2.isEmpty()) {
      return this.q2.dequeue();
    }
    else{
        return nlull
    }
  }
}
