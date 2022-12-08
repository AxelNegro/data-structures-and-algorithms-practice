// The node class represents a Node/Element of the stack.
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

// Implementation of a Stack using a LinkedList
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // Method in charge of return the top of the stack
  peek(){
    return this.top;
  }
  // Method in charge of adding a element to the stack
  push(value){
    // instantiate the new node
    let topNode = new Node(value);
    if(this.length === 0) // if the stack it's empty
      // then i set the bottom and top with the new node
      this.bottom = this.top = topNode;
    else{
      // if not, i set the actual top as the next node of the new node 
      topNode.setNext(this.top);
      // and assign the new node as the new top
      this.top = topNode;
    }
    // and the length increments
    this.length++;
  }

  // Method in charge of remove the top item on the stack
  pop(){
    // the new top it's now the next node of the previous node
    this.top = this.top.getNext();
    // the length decrements
    this.length--;
  }

  // Method in charge of verifying if the stack it's empty
  isEmpty(){
    return this.length === 0;
  }
  
  // Method in charge of listing all the elements of the stack
  list(){
    let array = [];
    let currentNode = this.top;
    
    while(currentNode){
      array.push(currentNode.value);
      currentNode = currentNode.getNext();
    }

    return array;
  }
}

const myStack = new Stack();

myStack.push("Google");
console.log(myStack.list());
myStack.push("Udemy");
myStack.push("Discord");
console.log(myStack.list());
myStack.pop();
console.log(myStack.list());
console.log(myStack.peek());

