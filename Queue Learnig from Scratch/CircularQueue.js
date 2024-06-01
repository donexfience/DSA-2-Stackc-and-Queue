class CircularQueue {
    constructor(capacity) {
      this.rear = -1;
      this.front = -1;
      this.capacity = capacity;
      this.currentLength = 0;
      this.items = new Array(capacity);
    }
  
    isFull() {
      return this.capacity === this.currentLength;
    }
  
    isEmpty() {
      return this.currentLength === 0;
    }
  
    Enqeue(element) {
      if (!this.isFull()) {
        this.rear = (this.rear + 1) % this.capacity;  // Wrap around
        this.items[this.rear] = element;
        this.currentLength += 1;
        if (this.front === -1) {
          this.front = this.rear;
        }
      } else {
        console.log("Queue is full");
      }
    }
  
    Deqeue() {
      if (!this.isEmpty()) {
        const item = this.items[this.front];
        this.items[this.front] = null;  // Optional: can be removed if not needed
        this.front = (this.front + 1) % this.capacity;  // Wrap around
        this.currentLength -= 1;
        if (this.isEmpty()) {
          this.rear = -1;
          this.front = -1;
        }
        return item;
      } else {
        console.log("Queue is empty");
        return null;
      }
    }
  
    Print() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
      } else {
        let str = '';
        for (let i = 0; i < this.currentLength; i++) {
          str += this.items[(this.front + i) % this.capacity] + ' ';
        }
        console.log(str.trim());
      }
    }
  }
  
  // Testing the CircularQueue
  const cq = new CircularQueue(5);  // Use 'new' keyword
  cq.Enqeue(10);
  cq.Enqeue(20);
  cq.Enqeue(30);
  cq.Enqeue(40);
  
  cq.Print();  // Should print: 10 20 30 40
  
  cq.Deqeue();  // Dequeue the first element (10)
  cq.Print();  // Should print: 20 30 40
  
  cq.Enqeue(50);
  cq.Enqeue(60);  // Enqueue additional elements
  cq.Print();  // Should print: 20 30 40 50 60
  
  cq.Deqeue();  // Dequeue the next element (20)
  cq.Print();  // Should print: 30 40 50 60
  