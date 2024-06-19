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
        let curr = this.head;
        let list = "";
        while (curr) {
            list += `${curr.value} => `;
            curr = curr.next;
        }
        list += "null";
        console.log(list);
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
        const item = this.head.value;
        if (this.isEmpty()) {
            return null;
        } else {
            if (this.isEmpty()) {
            this.tail = null;
            }
            this.head = this.head.next;
            this.size--;
        }
        return item
        }
        removeFromEnd() {
        let curr = this.head;
        const item = this.tail.value;
        if (this.isEmpty()) {
            return null;
        }
    
        if (this.head == this.tail) {
            this.tail = this.head = null;
        }
        else{
            while(curr.next !== this.tail){
                curr = curr.next;
            }
            curr.next = null;
            this.tail = curr
        }
        this.size--;
        return item;
        }
    }
    class Stack{
        constructor(){
            this.list = new LinkedList();
        }
        push(value){
            this.list.prepend(value)
        }
        pop(){
            return this.list.removeFromFront();
        }
        Peek(){
            return this.list.head ? this.list.head.value :"null"
        }
        print(){
            this.list.print();
        }
        isEmpty(){
            return this.list.isEmpty();
        }
    }
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    const result = stack.pop();
    console.log(result);
    stack.print();
    