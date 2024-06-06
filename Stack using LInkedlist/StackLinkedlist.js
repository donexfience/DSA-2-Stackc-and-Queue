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
  getSize() {
    return this.size;
  }
  Prepend(value) {
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  }
  RemoveFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      const item = this.head.value;
      this.head = this.head.next;
      this.size--;
      return item;
    }
  }
  RemoveEnd(){
    if(this.isEmpty()){
        return null
    }
    else{
        let prev =this.head;
        const value =this.head.value;
        while(prev.next!==this.tail){
            console.log(prev,"1111111111")
            prev = prev.next;
        }
        prev.mext = nill
        this.tail = prev
    }
  }
}
class stack{
  constructor(){
    this.list = new LinkedList();
  }
  pus(){
    th
  }
  pop(){
    return this.list.RemoveFront();
  }
  
}
