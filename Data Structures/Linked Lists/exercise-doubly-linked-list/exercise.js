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

// The node class represents a Node/Element of a doubly linked list.
// It has a value property, the previous and next property, that's stores the previous and next node/element res respectively
class Node{
  constructor(value){
    this.previous = null;
    this.value = value
    this.next = null;
  }

  setNext(next){
    this.next = next;
  }

  getNext(){
    return this.next;
  }

  setPrevious(previous){
    this.previous = previous;
  }

  getPrevious(){
    return this.previous;
  }
}

// The DoublyLinkedList class represents a linked list
// It has a head property, that represents the head/firts node, 
// a tail that represents the tail/last node
// and the length property
class DoublyLinkedList {
  // Constructor, creates the first node and assign it to the head and tail nodes.
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  // Method in charge of storing a new value at the start of the list.
  append(value) {
    // creates the last node
    const lastNode = new Node(value);
    // the previous tail node, becomes the previous node of the actual node
    lastNode.setPrevious(this.tail);
    // it's assigned to the next property of the tail node.
    this.tail.setNext(lastNode);
    // now, the new tail it's the last node.
    this.tail = lastNode;
    // Also, the length increments.
    this.length++;
  }
  // Method in charge of storing a new value at the end of the list.
  prepend(value){
    // creates the first node
    const firstNode = new Node(value);
    // the head node it's assigned to the next property of the new node
    firstNode.setNext(this.head);
    // the head's previous it's now the new first node.
    this.head.setPrevious(firstNode);
    // and the new head it's now the first node.
    this.head = firstNode;
    // Also, the length increments.
    this.length++;
  }

  // Method in charge of storing a new value in the list on the index specified.
  insert(index,value){
    // If the index it's 0 or >= the length of the value, the append/prepend methods are used.
    if(index === 0){
      this.prepend(value);
      return;
    }
    
    if(index >= this.length){
      this.append(value);
      return;
    }

    // Creates new node
    const insertedNode = new Node(value);
    // Find the node by the specified index
    let actualNode = this.findNodeByIndex(index);
    // The next node it's now the actual node and the previous it's the actual's previous node.
    insertedNode.setNext(actualNode);
    insertedNode.setPrevious(actualNode.getPrevious())
    // Get previous of the actual node and set the inserted node as next.
    actualNode.getPrevious().setNext(insertedNode);
    // Now, the previous node of the actual node it's the new node.
    actualNode.setPrevious(insertedNode);
    // Increase length
    this.length++;
    
  }
  
  // Method in charge of remove a value in the list on the index specified.
  remove(index){
    // If the index it's 0, then the second element it's now the head
    if(index === 0){
      // get the next node of the head
      let nextNode = this.head.getNext();
      // The previous it's doesnt going to exist anymore, so now it's null
      nextNode.setPrevious(null);
      // now the head it's the previous second node
      this.head = nextNode;
      // and length decrements.
      this.length--;
      return
    }
    //if index != 0, then i find the node by the specified index
    let actualNode = this.findNodeByIndex(index);

    // instantiate a variable that's going to containt the next and previous node of the actual node
    let nextNode = actualNode.getNext();
    let previousNode = actualNode.getPrevious();
    // set the next of the previous node as the next node.
    previousNode.setNext(nextNode)
    // set the previous of the next node as the previous node.
    nextNode.setPrevious(previousNode);
    // and length decrements.
    this.length--;
  }
  // Method in charge of iterate through the list and save the values in an array.
  list(){
    const array = [];
    let currentNode = this.head;
    while(currentNode){
      array.push(currentNode.value);
      currentNode = currentNode.getNext();
    }

    return array;
  }

  // Method in charge of iterate through the list and save the values in an array but backwards.
  listBackwards(){
    const array = [];
    let currentNode = this.tail;
    while(currentNode){
      array.push(currentNode.value);
      currentNode = currentNode.getPrevious();
    }

    return array;
  }

  // Method in charge of obtaining a node by it's index
  findNodeByIndex(index){
    // instantiate the variables that's going to store the actual iterating node and it's index
    let actualNode = this.head;
    let actualNodeIndex = 0;
    
    while(actualNode){
      // if the actual iterating node index it's equal to the specified index
      if(index === actualNodeIndex)
        // then i return it
        return actualNode;
      // if not, i continue iterating
      actualNode = actualNode.getNext();
      actualNodeIndex++;
    }
    
    return null;
  }

}



let myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
console.log(myDoublyLinkedList.list());
myDoublyLinkedList.insert(2, 13)
console.log(myDoublyLinkedList.list());
console.log(myDoublyLinkedList.listBackwards());
myDoublyLinkedList.remove(2);
console.log(myDoublyLinkedList.list());
console.log(myDoublyLinkedList.listBackwards());

