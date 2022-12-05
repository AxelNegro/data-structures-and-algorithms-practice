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

  preprend(value){
    const firstNode = new Node(value);
    firstNode.setNext(this.head);
    this.head = firstNode;
    this.length++;
  }

}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.preprend(1);

console.log(myLinkedList);

