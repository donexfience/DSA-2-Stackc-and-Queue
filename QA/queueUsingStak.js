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

    print() {
        let current = this.head;
        let listOfNodes = '';
        while (current) {
            listOfNodes += `${current.value} -> `;
            current = current.next;
        }
        listOfNodes += 'null';
        console.log(listOfNodes);
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

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return "empty";
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        if (this.isEmpty()) {
            this.tail = null;
        }
        return value;
    }
}

class Queue {
    constructor() {
        this.items = new LinkedList();
    }

    enqueue(value) {
        this.items.append(value);
    }

    dequeue() {
        return this.items.removeFromFront();
    }

    isEmpty() {
        return this.items.isEmpty();
    }

    peek() {
        return this.items.head ? this.items.head.value : "null";
    }

    print() {
        this.items.print();
    }
}

class Stack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push(value) {
        if (this.q1.isEmpty()) {
            this.q1.enqueue(value);
            while (!this.q2.isEmpty()) {
                this.q1.enqueue(this.q2.dequeue());
            }
        } else {
            this.q2.enqueue(value);
            while (!this.q1.isEmpty()) {
                this.q2.enqueue(this.q1.dequeue());
            }
        }
    }

    pop() {
        if (!this.q1.isEmpty()) {
            return this.q1.dequeue();
        }
        if (!this.q2.isEmpty()) {
            return this.q2.dequeue();
        }
        return "empty";
    }

    isEmpty() {
        return this.q1.isEmpty() && this.q2.isEmpty();
    }

    print() {
        if (!this.q1.isEmpty()) {
            this.q1.print();
        } else if (!this.q2.isEmpty()) {
            this.q2.print();
        } else {
            console.log("Stack is empty");
        }
    }
}

// Example usage:
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // 30 -> 20 -> 10 -> null
console.log(stack.pop()); // 30
stack.print(); // 20 -> 10 -> null
console.log(stack.pop()); // 20
console.log(stack.pop()); // 10
console.log(stack.pop()); // empty
