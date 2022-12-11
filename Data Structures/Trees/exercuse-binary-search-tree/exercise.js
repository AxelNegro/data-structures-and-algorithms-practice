class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  // Method in charge of inserting a value in the tree
  insert(value){
	  // If value is null, then return
	  if(!value) return;
  	// if root it's null, then return
  	if(!this.root){
  		this.root = new Node(value);
  		return;
  	}
  	// instantiate the variable that's going to contain the next node
  	let nextNode = null;
  	// instantiate the variable that's going to contain the behind node
    let behindNode = this.root;
    
  	do{ 
      if(nextNode) behindNode = nextNode; // if the nextNode its not null, then the new behind node its the next node
  		if(value > behindNode.value) // if the value it's greater than the value of the behind node
  		  nextNode = behindNode.right; // then the new next node it's the behind node's right
    	else // else, the next node it's the behind node's left
    		nextNode = behindNode.left;
    } while(nextNode) //while the next node it's not null, i keep iterating over the tree

    if(value > behindNode.value) // check in what node i have to assign the new value
  		behindNode.right = new Node(value);
  	else
  		behindNode.left = new Node(value);
  }
  // Method in charge of finding a value in the tree
  lookup(value){
  	// if root it's null, then return
    if(!this.root)
  		return null;
  	// instantiate the variable that's going to contain the behind node
    let currentNode = this.root;
    
  	do{ 
      if(value > currentNode.value) // if the value it's greater than the value of the behind node
  		  currentNode = currentNode.right; // then the new next node it's the behind node's right
    	else if(value < currentNode.value) // else if the value its less than the value of the behind node
    		currentNode = currentNode.left; // the next node it's the behind node's left
      else // if it's not greater and not less, then it's equal
        return currentNode.value; // so i return it
    } while(currentNode) //while the next node it's not null, i keep iterating over the tree
    // if the code reachs this part, then means that next node it's null and the specified value doesnt exist, so i return null
    return null;
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))
console.log(tree.lookup(15))
console.log(tree.lookup(16))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}


