class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
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

    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.head.value;
        this.head = this.head.next;
        this.size--;
        if (this.isEmpty()) {
            this.tail = null;
        }
        return item;
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.size--;
        return item;
    }

    print() {
        let current = this.head;
        let listOfNodes = "";
        while (current) {
            listOfNodes += `${current.value} -> `;
            current = current.next;
        }
        listOfNodes += 'null';
        console.log(listOfNodes);
    }
}

class Stack {
    constructor() {
        this.items = new LinkedList();
    }

    push(value) {
        this.items.prepend(value);
    }

    pop() {
        return this.items.removeFromFront();
    }

    peek() {
        return this.items.head ? this.items.head.value : null;
    }

    isEmpty() {
        return this.items.isEmpty();
    }

    removeEvenNumbers() {
        const oddStack = new Stack();
        const evenStack = new Stack();

        while (!this.isEmpty()) {
            const value = this.pop();
            if (value % 2 === 0) {
                evenStack.push(value);
            } else {
                oddStack.push(value);
            }
        }

        while (!evenStack.isEmpty()) {
            this.push(evenStack.pop());
        }

        while (!oddStack.isEmpty()) {
            this.push(oddStack.pop());
        }
    }

    print() {
        this.items.print();
    }
}

// Example Usage
const stack = new Stack();
stack.push(12);
stack.push(13);
stack.push(15);
stack.push(16);
stack.push(22);
stack.push(23);
stack.push(25);

console.log("Original Stack:");
stack.print(); // 25 -> 23 -> 22 -> 16 -> 15 -> 13 -> 12 -> null

console.log("Pop from Stack:");
console.log(stack.pop()); // 25

console.log("Peek Stack:");
console.log(stack.peek()); // 23

console.log("Is Stack Empty?");
console.log(stack.isEmpty()); // false

console.log("Stack after removing even numbers:");
stack.print(); // 25 -> 23 -> 15 -> 13 -> 22 -> 16 -> 12 -> null
