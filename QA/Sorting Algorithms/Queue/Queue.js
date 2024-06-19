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
    Print(){
        let current = this.head;
        let list ='';
        while(current){
            list +=`${current.value} => `
            current = current.next;
        }
        list +='null';
        console.log(list)
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
        return "empty";
      } else {
        const item = this.head.value;
        this.head = this.head.next;
        this.size--;
        if (this.isEmpty()) {
          this.tail = null;
        }
        return item;
      }
    }
  
    removeFromEnd() {
      if (this.isEmpty()) {
        return "empty";
      }
      const item = this.tail.value;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        let current = this.head;
        while (current.next !== this.tail) {
          current = current.next;
        }
        current.next = null;
        this.tail = current;
      }
      this.size--;
      return item;
    }
  }
  
  class Queue {
    constructor() {
      this.list = new LinkedList();
    }
  
    enqueue(value) {
      this.list.append(value);
    }
  
    dequeue() {
      return this.list.removeFromFront();
    }
  
    peek() {
      return this.list.head ? this.list.head.value : "null";
    }
  
    isEmpty() {
      return this.list.isEmpty();
    }
    Print(){
        this.list.print();
    }
  }
  
  // Example usage
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.peek()); // Should output 1
  queue.Print();
  console.log(queue.dequeue()); // Should output 1
  console.log(queue.dequeue()); // Should output 2
  console.log(queue.isEmpty()); // Should output false
  console.log(queue.dequeue()); // Should output 3
  console.log(queue.isEmpty()); // Should output true
  console.log(queue.dequeue()); // Should output "empty"
  