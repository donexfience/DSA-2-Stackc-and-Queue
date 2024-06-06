class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  Peek() {
    return this.items[this.items.length - 1];
  }
}
function ReverseAstring(str) {
  const stack = new Stack();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
}

const reversed = ReverseAstring("donex");
console.log(reversed);
