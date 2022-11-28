/*
  Create the gets and sets methods
*/
class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
      // I see that the hash function determines the hash based on the data array length,
      // So i going to use that in the sets and gets functions
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  // using the hash function, i set the position on the array and the value
  set(key, value){
    this.data[this._hash(key)] = value;
  }

  // using the hash function, i get the value based on the hash key
  get(key){
    return this.data[this._hash(key)];
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'))
