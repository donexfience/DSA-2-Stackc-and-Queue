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
  Print() {
    if (this.isEmpty()) {
      return "empty";
    }
    let current = this.head;
    let listOfNodes = "";
    while (current) {
      listOfNodes += `${current.value} = >`;
      current = current.next;
    }
    listOfNodes += "null";
    console.log(listOfNodes);
  }
  Append(value) {
    let newNode = new Node(value);
    let current = this.head;
  }
}
