class Node{
    constructor(value){
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
  print() {
    let curr = this.head;
    let list = "";
    while (curr) {
      list += `${curr.value} - > `;
      curr = curr.next;
    }
    list += "null";
    console.log(list);
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
  RemoveFront() {
    const item = this.head.value;
    if (this.isEmpty()) {
      return null;
    }
    if (this.isEmpty()) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return item;
  }
  RemoveEnd() {
    let item = this.tail.value;
    let curr = this.head;
    if (this.isEmpty()) {
      return null;
    }
    if (this.head == this.tail) {
      this.head == this.tail == null;
    }
    else{
        while(curr.next !==this.tail){
            curr = curr.next;
        }
        curr.next = null;
        this.tail = curr
    }
    this.size--;
    return item;
  }

}
class Stack{
    constructor(){
        this.list = new LinkedList()
    }
    push(value){
        this.list.prepend(value)
    }
    pop(){
        return this.list.RemoveFront();
    }
    peek(){
        return this.list.head ? this.list.head.value : "null"
    }
    isEmpty(){
        return this.list.isEmpty();
    }
}

function ReverseAString(str){
    const stack = new Stack();
    for(let i=0;i<str.length;i++){
        stack.push(str[i]);
    }
    let result ='';
    while(!stack.isEmpty()){
        result +=stack.pop();
    }
    return result;
}
const res = ReverseAString('donex');
console.log(res);
