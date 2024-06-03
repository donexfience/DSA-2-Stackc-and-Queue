class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    this.items.pop();
  }
  Peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  Print() {
    console.log(this.items.join("=>") + "null");
  }
}
const Stack = new Stack();
stack.push();
stack.pop();
stack.Print();                
 