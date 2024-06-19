class Table {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    // Convert the key to a string if it's not already a string
    convertToString(key) {
      if (typeof key !== 'string') {
        return String(key);
      }
      return key;
    }
  
    hash(key) {
      key = this.convertToString(key); // Convert key to string if necessary
      let result = 0;
      for (let i = 0; i < key.length; i++) {
        result += key.charCodeAt(i);
      }
      return result % this.size;
    }
  
    set(key, value) {
      let index = this.hash(key);
      while (this.table[index] !== undefined) {
        if (this.table[index].key === key) {
          // If key already exists, update its value
          this.table[index].value = value;
          return;
        }
        index = (index + 1) % this.size; // Linear probing
      }
      this.table[index] = { key, value };
    }
  
    remove(key) {
      let index = this.hash(key);
      while (this.table[index] !== undefined) {
        if (this.table[index].key === key) {
          this.table[index] = undefined;
          return true;
        }
        index = (index + 1) % this.size; // Linear probing
      }
      return false;
    }
  
    get(key) {
      let index = this.hash(key);
      while (this.table[index] !== undefined) {
        if (this.table[index].key === key) {
          return this.table[index].value;
        }
        index = (index + 1) % this.size; // Linear probing
      }
      return undefined;
    }
  
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
          console.log(i, this.table[i].key, this.table[i].value);
        }
      }
    }
  
    removeDuplicateValues() {
      const valuesSet = new Set();
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
          const { key, value } = this.table[i];
          if (valuesSet.has(value)) {
            this.remove(key);
          } else {
            valuesSet.add(value);
          }
        }
      }
    }
  }
  
  const t = new Table(10);
  t.set(1, 5);
  t.set('donex', 6);
  t.set('fience', 7);
  t.set('another', 6); // This has a duplicate value
  console.log("Original Table:");
  t.display();
  
  t.removeDuplicateValues();
  console.log("Table after removing duplicate values:");
  t.display();
  