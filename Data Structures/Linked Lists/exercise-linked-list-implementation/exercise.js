// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

// The node class represents a Node/Element of the linked list.
// It has a value property and the next property, that's stores the next node/element
class Node{
  constructor(value){
    this.value = value
    this.next = null;
  }

  setNext(next){
    this.next = next;
  }
}

// The LinkedList class represents a linked list
// It has a head property, that represents the head/firts node, 
// a tail that represents the tail/last node
// and the length property
class LinkedList {
  // Constructor, creates the first node and assign it to the head and tail nodes.
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  // Method in charge of storing a new value at the start of the list.
  // First, creates the last node, and later, it's assigned to the next property of the tail node.
  // Also, the length increments.
  append(value) {
    const lastNode = new Node(value);
    this.tail.next = lastNode;
    this.tail = lastNode;
    this.length++;
  }
  // Method in charge of storing a new value at the end of the list.
  // First, creates the first node, and later, the head node it's assigned to the next property of the node that's just created.
  // Also, the length increments.
  prepend(value){
    const firstNode = new Node(value);
    firstNode.setNext(this.head);
    this.head = firstNode;
    this.length++;
  }

  // Method in charge of storing a new value in the list on the index specified.
  // If the index it's 0 or >= the length of the value, the append/prepend methods are used.
  // If not, iterates through the list, saving the behind node and the actual node and index.
  // When the index it's equal to the actual node index, then the actual node it's inserted on the next property of the new node,
  // and later the new node it's inserted on the next property of the behind node.
  // Also, the length increments.
  insert(index,value){
    if(index === 0){
      this.prepend(value);
      return;
    }
    
    if(index >= this.length){
      this.append(value);
      return;
    }
  
    const insertedNode = new Node(value);
    let behindNode = null;
    let actualNode = this.head;
    let actualNodeIndex = 0;
    
    while(actualNode){
      if(index === actualNodeIndex){
        insertedNode.setNext(actualNode);
        behindNode.setNext(insertedNode);
        this.length++;
        break;
      }
      behindNode = actualNode;
      actualNode = actualNode.next;
      actualNodeIndex++;
    }
    
  }
  
  // Method in charge of remove a value in the list on the index specified.
  // If the index it's 0 then the next property of the head node, it's assigned in the head node property of this class.
  // If not, iterates through the list, saving the behind node and the actual node and index.
  // When the index it's equal to the actual node index, then the actual node's next property it's assigned as the actual node,
  // and later the "new" actual node it's setted as next property of the behind node.
  // Also, the length decrements.
  remove(index){
    if(index === 0){
      this.head = this.head.next;
      this.length--;
      return
    }

    let behindNode = null;
    let actualNode = this.head;
    let actualNodeIndex = 0;

    while(actualNode){
      if(index === actualNodeIndex){
        actualNode = actualNode.next;
        behindNode.setNext(actualNode);
        this.length--;
        break;
      }
      behindNode = actualNode;
      actualNode = actualNode.next;
      actualNodeIndex++;
    }
  }
  // Method in charge of iterate through the list and save the values in an array.
  list(){
    const array = [];
    let currentNode = this.head;
    while(currentNode){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.list());
myLinkedList.insert(2, 13)
console.log(myLinkedList.list());
myLinkedList.remove(2);
console.log(myLinkedList.list());

