class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  Enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  Dequeue() {
    if (this.isEmpty()) {
      return null; // Handle empty queue case
    }
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  Print() {
    console.log(Object.values(this.items).join("====>"));
  }

  Peek() {
    if (this.isEmpty()) {
      return null; // Handle empty queue case
    }
    return this.items[this.front];
  }
}

// Example usage
const myQueue = new Queue();
myQueue.Enqueue(10);
myQueue.Enqueue(20);
myQueue.Enqueue(30);

console.log(myQueue.Dequeue()); // Output: 10
console.log(myQueue.Peek()); // Output: 20
myQueue.Print(); // Output: 20=>30
