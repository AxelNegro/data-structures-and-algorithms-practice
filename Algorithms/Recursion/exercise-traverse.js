class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // Method in charge of inserting a value in the tree
  insert(value) {
    // If value is null, then return
    if (!value) return;
    // if root it's null, then return
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    // instantiate the variable that's going to contain the next node
    let nextNode = null;
    // instantiate the variable that's going to contain the behind node
    let behindNode = this.root;

    do {
      if (nextNode) behindNode = nextNode; // if the nextNode its not null, then the new behind node its the next node
      if (value > behindNode.value) // if the value it's greater than the value of the behind node
        nextNode = behindNode.right; // then the new next node it's the behind node's right
      else // else, the next node it's the behind node's left
        nextNode = behindNode.left;
    } while (nextNode) //while the next node it's not null, i keep iterating over the tree

    if (value > behindNode.value) // check in what node i have to assign the new value
      behindNode.right = new Node(value);
    else
      behindNode.left = new Node(value);
  }
  // Method in charge of finding a value in the tree
  lookup(value) {
    // if root it's null, then return
    if (!this.root)
      return false;
    // instantiate the variable that's going to contain the behind node
    let currentNode = this.root;

    do {
      if (value > currentNode.value) // if the value it's greater than the value of the behind node
        currentNode = currentNode.right; // then the new next node it's the behind node's right
      else if (value < currentNode.value) // else if the value its less than the value of the behind node
        currentNode = currentNode.left; // the next node it's the behind node's left
      else // if it's not greater and not less, then it's equal
        return true; // so i return it
    } while (currentNode) //while the next node it's not null, i keep iterating over the tree
    // if the code reachs this part, then means that next node it's null and the specified value doesnt exist, so i return null
    return false;
  }
  // Method in charge of removing an object from the tree
  remove(value) {
    // if root it's null, then return false
    if (!this.root)
      return false;
    // instantiate the variable that's going to contain the current node while iterating over the tree
    let currentNode = this.root;
    // instantiate the variable that's going to contain the node to delete
    let deletedNode = null;
    // instantiate the variable that's going to contain the parent of the node to delete
    // this is mainly to update this node with the data of the replacement node
    let deletedParentNode = null;
    // instantiate the variable that's going to contain the node that replace the deleted one
    let replacementNode = null;
    // instantiate the variable that's going to contain the node that it's the parent of the replacement node
    // this is mainly to update to null the pointer to the child node which it's now the replacement node
    let replacementParentNode = null;
    do {
      if (deletedNode) { // if the node to deleted was found
        if (currentNode.left) // if there's a node with less value than the actual one
          replacementParentNode = currentNode; // then i save the current node as the replacement parent node to update it's childs nodes later
        else
          replacementNode = currentNode; // else, then the current node it's the smallest one
        currentNode = currentNode.left; // i keep iterating to find a smaller value until the current node it's null
      }
      else { // else, i keep iterating over the tree normally until i find the node to delete
        if (value > currentNode.value) { // if the value it's greater than the value of the behind node
          deletedParentNode = currentNode; // i keep saving the current node as the deleted parent node in case that one of it's siblings it's the node to delete
          currentNode = currentNode.right; // then the new next node it's the behind node's right
        }
        else if (value < currentNode.value) { // else if the value its less than the value of the behind node
          deletedParentNode = currentNode; // i keep saving the current node as the deleted parent node in case that one of it's siblings it's the node to delete
          currentNode = currentNode.left; // the next node it's the behind node's left
        }
        else { // if it's not greater and not less, then it's equal
          deletedNode = currentNode; // so i find the node to delete
          if (currentNode.right) // if there's a greater value than the node to delete
            currentNode = currentNode.right; // then the next node it's the right of the node to delete
          else
            currentNode = currentNode.left; // else, the next node it's the left of the node to delete
        }
      }
    } while (currentNode) //while the next node it's not null, i keep iterating over the tree

    if (deletedNode) { // if the node to delete was found
      if (deletedParentNode.left && deletedParentNode.left.value == value) // then i check if the left node of the parent of the deleted node it's the node to delete
        deletedParentNode.left = replacementNode;  // if it is, then i update the deleted parent's left node with the replacement node
      else
        deletedParentNode.right = replacementNode; // else, i update the deleted parent's right node with the replacement node

      // update the nodes of the replacement node with the nodes of the deleted one
      replacementNode.left = deletedNode.left;
      replacementNode.right = deletedNode.right;

      if (replacementParentNode) { // if there's a replacement parent node
        if (replacementParentNode.left && replacementParentNode.left.value == replacementNode.value) // then i check if the left node it's the replacement node
          replacementParentNode.left = null; // if it is, then i update the replacement parent's left node with null
        else
          replacementParentNode.right = null; // else, i update the replacement parent's right node with null
      }
      return true; // and return true, since the node was removed
    }
    else return false; // else, return false
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.insert(165)
tree.remove(20)
console.log(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  let nodes = [];
  if (node.left) nodes = nodes.concat(traverse(node.left));
  if (node.right) nodes = nodes.concat(traverse(node.right));
  return nodes;
}


