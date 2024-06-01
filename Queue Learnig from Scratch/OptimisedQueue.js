class Queue{
    constructor(){
        this.item ={};
        this.rear = 0;
        this.front =0;
    }
    isEmpty(){
        return this.rear === this.front;
    }
    Peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    Size(){
        return this.rear - this.front;
    }
    Enqeue(element){
        this.item[this.rear] =element;
        this.rear++;
    }
    Deqeue(element){
        const item = this.item[this.front];
        delete this.item[this.front]
        this.front++;
        return item;
    }
    Print(){
        console.log(this.item)
    }
}
const queue = new Queue;
queue.Enqeue(10);
queue.Enqeue(20);
queue.Enqeue(30);
queue.Enqeue(40);
queue.Deqeue(20)
queue.Print()
const size = queue.Size();
console.log(size)