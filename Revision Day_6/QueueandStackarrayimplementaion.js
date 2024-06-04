class Queue {
    constructor() {
      this.items = [];
    }
    enqeue(element) {
      this.items.push(element);
    }
    Deqeue() {
      this.items.shift();
    }
    Print() {
      console.log(this.items.join("->"));
    }
    Peek() {
      this.items[this.items.length - 1];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
  }
  const q = new Queue();
  q.enqeue(10);
  q.enqeue(20);
  q.enqeue(30);
  q.enqeue(40);
  q.enqeue(50);
  q.Deqeue();
  q.Print();
  
  class Stack{
      constructor(){
          this.items =[];
      }
      push(value){
          this.items.push(value)
      }
      pop(){
          this.items.pop()
      }
      Peek(){
          return this.items[this.items.length-1]
      }
        isEmpty() {
      return this.items.length === 0;
    }
      Print() {
      console.log(this.items.join("->"));
    }
    size() {
      return this.items.length;
    }
  }
  const s = new Stack();
  s.push(10);
  s.push(20);
  s.push(30);
  s.push(40);
  s.push(50)
  s.pop();
  s.Print();
  