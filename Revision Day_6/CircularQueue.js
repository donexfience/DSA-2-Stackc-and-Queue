class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.currentaLength = 0;
    this.rear = -1;
    this.front = -1;
  }
  isFull() {
    return this.currentaLength === this.capacity;
  }
  isEmpty() {
    return this.currentaLength === 0;
  }
  //   Enqeue(element) {
  //     if (!this.isFull()) {
  //       this.rear = (this.rear + 1) % this.capacity;
  //       this.items[this.rear] = element;
  //       this.currentaLength += 1;
  //     }
  //     if (this.front === -1) {
  //       this.front = this.rear;
  //     } else {
  //       console.log("queeue full");
  //     }
  //   }
  Enqeue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentaLength += 1;
    }
    if (this.isEmpty()) {
      this.rear = this.front;
    } else {
      console.log("queue is full");
    }
  }
  Deqeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front];
      this.front = (this.front + 1) % this.capacity;
      this.items[this.front] = null;
      this.currentaLength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear -= 1;
      }
      return item;
    } else {
      console.log("queue is empty");
    }
  }
}
