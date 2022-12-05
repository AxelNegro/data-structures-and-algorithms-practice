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

class Node{
  constructor(value){
    this.value = value
    this.next = null;
  }

  setNext(next){
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
    const lastNode = new Node(value);
    this.tail.next = lastNode;
    this.tail = lastNode;
    this.length++;
  }

  prepend(value){
    const firstNode = new Node(value);
    firstNode.setNext(this.head);
    this.head = firstNode;
    this.length++;
  }

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
        break;
      }
      behindNode = actualNode;
      actualNode = actualNode.next;
      actualNodeIndex++;
    }
    
  }

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

