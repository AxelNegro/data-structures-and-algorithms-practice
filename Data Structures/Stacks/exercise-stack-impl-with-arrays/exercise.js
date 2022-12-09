// Implementation of a Stack using a LinkedList
class Stack {
  constructor() {
    this.stack = [];
  }
  // Method in charge of return the top of the stack
  peek(){
    return this.stack[this.stack.length-1];
  }
  // Method in charge of adding a element to the stack
  push(value){
    this.stack.push(value);
  }

  // Method in charge of remove the top item on the stack
  pop(){
    this.stack.pop();
  }

  // Method in charge of verifying if the stack it's empty
  isEmpty(){
    return this.stack.length === 0;
  }
  
  // Method in charge of listing all the elements of the stack
  list(){
    return this.stack;
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

