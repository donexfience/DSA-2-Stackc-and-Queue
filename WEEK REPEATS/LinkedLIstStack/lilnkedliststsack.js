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
  
    Prepend(value) {
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
  
    Append(value) {
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
  
    RemoveFront() {
      if (this.isEmpty()) {
        return "empty";
      } else {
        const value = this.head.value;
        this.head = this.head.next;
        if (this.isEmpty()) {
          this.tail = null;
        }
        this.size--;
        return value;
      }
    }
  
    RemoveFromEnd() {
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
  
    Print() {
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
      this.list = new LinkedList();
    }
  
    push(value) {
      this.list.Prepend(value);
    }
  
    pop() {
      return this.list.RemoveFront();
    }
  
    isEmpty() {
      return this.list.isEmpty();
    }
  
    Peek() {
      return this.list.head ? this.list.head.value : "empty";
    }
  
    Print() {
      this.list.Print();
    }
  }
  
  const s = new Stack();
  s.push(10);
  s.push(20);
  s.push(30);
  s.push(40);
  s.push(50);
  const delteValue = s.pop();
  console.log(delteValue);
  s.Print();
  