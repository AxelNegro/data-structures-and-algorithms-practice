class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {
    }; 
  } 
  // Method in charge of adding a vertex/node
  addVertex(node)  { 
    // First, i check if the node already exists
    if(!this.adjacentList[node]){
      // if not, then i add the node as a property of the object adjacentList
      this.adjacentList[node] = []
      // and increase the number of nodes
      this.numberOfNodes++;
    }
  } 
  // Method in charge of adding a edge between nodes
  addEdge(node1, node2) { 
    // first, i check if both nodes exists
    if(this.adjacentList[node1]&&this.adjacentList[node2]){
      // if exist, then i check if the property node1 doesnt have the node 2 already 
      if(!this.adjacentList[node1].includes(node2))
        // if not, then i add it
        this.adjacentList[node1].push(node2);
      // later, i check if the property node1 doesnt have the node 2 already
      if(!this.adjacentList[node2].includes(node1))
        // if not, then i add it
        this.adjacentList[node2].push(node1);
    }
      
  } 
  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
} 
} 

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5