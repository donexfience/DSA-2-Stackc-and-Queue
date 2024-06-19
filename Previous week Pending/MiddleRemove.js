class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {
    let current = this.head;
    let listOfNodes = "";
    while (current) {
      listOfNodes += `${current.value} - >`;
      current = current.next;
    }
    listOfNodes += "null";
    console.log(listOfNodes);
  }
  append(value) {
    let current = this.head;
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  getMiddle() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  MiddleNodeRemove() {
    let middle = this.getMiddle();
    let prev = null;
    let current = this.head;
    while (current.next != middle) {
      prev = current;
      console.log("preeeeev", prev);
      current = current.next;
      console.log(current, "cuurrnefe");
    }
    prev.next = current.next;
    this.size--;
  }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
const middle = list.getMiddle();
console.log("Middle", middle);
list.MiddleNodeRemove();
list.print();  
