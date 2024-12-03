class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    const keyLength = key.length;
    for (let i = 0; i < keyLength; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const allKeys = [];
    for (let index = 0; index < this.dataMap.length; index++) {
      if (this.dataMap[index]) {
        for (let i = 0; i < this.dataMap[index].length; i++) {
          allKeys.push(this.dataMap[index][i][0]);
        }
      }
    }
    return allKeys;
  }
}

// const hashTable = new HashTable();
// hashTable.set("option1", 20);
// hashTable.set("option2", 30);
// hashTable.set("option3", 40);
// hashTable.set("option4", 80);
// hashTable.set("option5", 90);
// hashTable.set("option6", 70);
// hashTable.set("option7", 60);
// hashTable.set("option8", 65);
// hashTable.set("option9", 55);
// hashTable.get('option8');
// hashTable.keys();
