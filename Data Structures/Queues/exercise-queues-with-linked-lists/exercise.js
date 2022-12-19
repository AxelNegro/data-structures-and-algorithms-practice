// The node class represents a Node/Element of the queue.
// It has a value property and the next property, that's stores the next node/element
class Node{
  constructor(value){
    this.value = value
    this.next = null;
  }

  setNext(next){
    this.next = next;
  }

  getNext(){
    return this.next;
  }
}

// Implementation of a Queue using a LinkedList
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // Method in charge of return the first elements of the queue
  peek(){
    return this.first;
  }
  // Method in charge of adding a element to the queue
  enqueue(value){
    // instantiate the new node
    let lastNode = new Node(value);
    if(this.length === 0) // if the queue it's empty
      // then i set the last and first with the new node
      this.first = this.last = lastNode;
    else{
      // if not, i set the new node of the actual last node as next node 
      this.last.setNext(lastNode);
      // and assign the new node as the new last
      this.last = lastNode;
    }
    // and the length increments
    this.length++;
  }

  // Method in charge of remove the first item on the queue
  dequeue(){
    // if the first its equal to the last, then that's mean that the list has only one item
    if(this.first === this.last)
      this.last = null;
    // the new first it's now the next node of the previous first node
    this.first = this.first.getNext();
    // the length decrements
    this.length--;
  }

  // Method in charge of verifying if the queue it's empty
  isEmpty(){
    return this.length === 0;
  }
  
  // Method in charge of listing all the elements of the queue
  list(){
    let array = [];
    let currentNode = this.first;
    
    while(currentNode){
      array.push(currentNode.value);
      currentNode = currentNode.getNext();
    }

    return array;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
console.log(myQueue.list());
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
console.log(myQueue.list());
myQueue.dequeue();
console.log(myQueue.list());
console.log(myQueue.peek());

