class Queue {
  constructor() {
    this.items = [];
  }
  enqeue() {
    this.items.push(element);
    return this.items.push(element); //linear commplextity we need to change this to obtain the complexity of the 0(1)
  }
  deqeue() {
    this.items.shift(element);
    return this.items.shift(element);
  }
  isEmpty() {
    return this.items === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
  }
  print() {
    return this.items.toString();
  }
}
