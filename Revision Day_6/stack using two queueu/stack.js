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
  
  class StackUsingQueues {
    constructor() {
      this.queue1 = new LinkedListQueue();
      this.queue2 = new LinkedListQueue();
    }
  
    push(value) {
      if (this.queue1.isEmpty()) {
        this.queue1.enqueue(value);
        while (!this.queue2.isEmpty()) {
          this.queue1.enqueue(this.queue2.dequeue());
        }
      } else {
        this.queue2.enqueue(value);
        while (!this.queue1.isEmpty()) {
          this.queue2.enqueue(this.queue1.dequeue());
        }
      }
    }
  
    pop() {
      if (!this.queue1.isEmpty()) {
        return this.queue1.dequeue();
      } else if (!this.queue2.isEmpty()) {
        return this.queue2.dequeue();
      } else {
        return null;
      }
    }
  
    print() {
      if (!this.queue1.isEmpty()) {
        this.queue1.print();
      } else {
        this.queue2.print();
      }
    }
  
    peek() {
      if (!this.queue1.isEmpty()) {
        return this.queue1.peek();
      } else {
        return this.queue2.peek();
      }
    }
  
    isEmpty() {
      return this.queue1.isEmpty() && this.queue2.isEmpty();
    }
  }
  
  // Testing the code
  const stack = new StackUsingQueues();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  stack.print(); // Output: 50 -> 40 -> 30 -> 20 -> 10 -> null
  console.log(stack.pop()); // Output: 50
  console.log(stack.pop()); // Output: 40
  stack.print(); // Output: 30 -> 20 -> 10 -> null
  