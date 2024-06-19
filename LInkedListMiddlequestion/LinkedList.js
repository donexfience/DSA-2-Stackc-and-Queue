class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size =0;
    }
    isEmpty(){
        return this.size === 0 
    }
    Prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            const node = new Node(value);
            node.next = this.head;
            this.head = node;
        }
        this.size ++;
    }
    Append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size ++;
    }
    Print(){
        let current = this.head;
        let listOfNode ='';
        while(current){
            listOfNode +=`${current.value} - >`
            current = current.next;
        }
        listOfNode +='null';
        console.log(listOfNode)
    }
    getMiddle(){
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow
    }
    RemoveAftertheMiddle(){
        if(this.size < 2){
            return "There is no middle element after the middle node"
        }
        const middle = this.getMiddle();
        if(middle.next){
            middle.next = middle.next.next;
            this.size --;
        }
        else{
            console.log("no node exist before the middle node")
        }
    }
    RemoveMiddle(){
        const middle = this.getMiddle();
        let current = this.head;
        if(this.size <2){
            return "there is no middle element after the middle node"
        }
        else{
            while(current.next !=middle){
            current = current.next;
        }
        current.next = current.next.next;
        this.size --;
        }

    }
    RemoveBeforetheMiddle(){
        let current = this.head;
        let middle = this.getMiddle();
        if(this.size<2){
            return "there is no middle element after the middle node"
        }
        else{
          while(current !==middle){
              current = current.next;
          }
          current.next = current.next.next;
          this.size--;
        }
    }
}
const list = new LinkedList();
list.Append(10);
list.Append(20);
list.Append(30);
list.Append(40);
list.Append(50);
const result = list.getMiddle();
console.log(result)
list.RemoveMiddle();
list.Print();