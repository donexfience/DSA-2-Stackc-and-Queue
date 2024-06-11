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
      const index = this.hash(key);
      this.table[index] = value;
    }
  
    remove(key) {
      const index = this.hash(key);
      this.table[index] = undefined;
    }
  
    get(key) {
      const index = this.hash(key);
      return this.table[index];
    }
  
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
          console.log(i, this.table[i]);
        }
      }
    }
  }
  
  const t = new Table(10);
  t.set(1, 5);
  t.set('donex', 6);
  t.set('fience', 6);
  t.display();
  