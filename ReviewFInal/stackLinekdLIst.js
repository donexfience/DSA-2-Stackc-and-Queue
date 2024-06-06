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

    Append(value) {
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

    Prepend(value) {
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

    getMiddle() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    RemoveFront() {
        if (this.isEmpty()) {
            return "empty nothing to delete";
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        if (this.isEmpty()) {
            this.tail = null;
        }
        return value;
    }

    RemoveFromEnd() {
        if (this.isEmpty()) {
            return "empty";
        }
        const value = this.tail.value;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            let current = this.head;
            while (current.next != this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.size--;
        return value;
    }

    Print() {
        let current = this.head;
        let listOfNodes = "";
        while (current) {
            listOfNodes += `${current.value} -> `;
            current = current.next;
        }
        listOfNodes += "null";
        console.log(listOfNodes);
    }
}

class LinkedListStack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.Prepend(value);
    }

    pop() {
        return this.list.RemoveFront();
    }

    Peek() {
        return this.list.head ? this.list.head.value : null;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    Print() {
        this.list.Print();
    }
}

const stack = new LinkedListStack();
stack.push(10);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);

const deleted = stack.pop(); // deleted will be 60
console.log(deleted); // Output: 60

stack.Print();
// Output: 50 -> 40 -> 30 -> 10 -> null
