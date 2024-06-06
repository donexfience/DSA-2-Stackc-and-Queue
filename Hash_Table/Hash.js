class Table {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
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
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
  Remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  Display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const table = new Table(30);
table.set("donex",34)
table.set("fience",35)
table.set("prajun",36)
table.set( "varun",37)
table.set("shabeel",38)
table.Display();
