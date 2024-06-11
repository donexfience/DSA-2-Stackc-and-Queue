class Table {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  convertToString(key) {
    if (typeof key !== "string") {
      return String(key);
    } else {
      return key;
    }
  }

  hash(key) {
    let result = 0; // Initialize result as a number
    key = this.convertToString(key);
    for (let i = 0; i < key.length; i++) {
      result += key.charCodeAt(i); // Accumulate character codes
    }
    return result % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    let originalIndex = index; // Corrected variable name
    let probingCount = 0; // Corrected variable name

    while (this.table[index] !== undefined && this.table[index].key !== key) {
      index = (index + 1) % this.size;
      probingCount++;
      if (index === originalIndex || probingCount >= this.size) {
        throw new Error("Table is full");
      }
    }

    if (this.table[index] !== undefined && this.table[index].key === key) {
      // Update value if key already exists
      this.table[index].value = value;
    } else {
      this.table[index] = { key, value }; // Store key-value pair
    }
  }

  remove(key) {
    let index = this.hash(key);
    let originalIndex = index; // Corrected variable name
    let probingCount = 0; // Corrected variable name

    while (this.table[index] !== undefined) {
      if (this.table[index].key === key) {
        this.table[index] = undefined; // Remove key-value pair
        return;
      }
      index = (index + 1) % this.size;
      probingCount++;
      if (index === originalIndex || probingCount >= this.size) {
        return; // Key not found or table is full
      }
    }
  }

  get(key) {
    let index = this.hash(key);
    let originalIndex = index; // Corrected variable name
    let probingCount = 0; // Corrected variable name

    while (this.table[index] !== undefined) {
      if (this.table[index].key === key) {
        return this.table[index].value; // Return value if key found
      }
      index = (index + 1) % this.size;
      probingCount++;
      if (index === originalIndex || probingCount >= this.size) {
        return undefined; // Key not found or table is full
      }
    }
    return undefined; // Key not found
  }
  sets(key, value) {
    const index = this.hash(key);
    const orginalIndex = index;
    let probingCount = 0;
    while (this.table[index] != undefined && this.table[index].key !== key) {
      index = (index + 1) % this.size;
      probingCount++;
      if (index == orginalIndex || probingCount >= this.size) {
        return undefined;
      }
      if (this.table[index] !== undefined && this.table[index].key === key) {
        this.table[index].value = value;
        this.table[index].value = [key, value];
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i, this.table[i]);
      }
    }
  }
}

function Duplicates(array) {
  const duplicates = [];
  const table = new Table(array.length);

  for (let i = 0; i < array.length; i++) {
    if (table.get(array[i]) !== undefined) {
      duplicates.push(array[i]);
    } else {
      table.set(array[i], true); // Use `true` to indicate presence
    }
  }

  table.display(); // Display the table for debugging purposes
  return duplicates;
}

const array = [1, 2, 3, 5, 3, 2, 6, 7, 8];
console.log("Duplicates:", Duplicates(array)); // Output duplicates
