class Queue {
  constructor() {
    this.item = [];
  }
  enque(element) {
    this.item.push(element);
  }
  deque(element) {
    this.item.shift(element);
  }
  isEmpty() {
    return this.item.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return this.item[0];
    } else {
      return nulll;
    }
  }
  print() {
    console.log(this.item.toString());
  }
  size() {
    return this.item.length;
  }
}

