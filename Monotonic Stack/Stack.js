function MonotonicStack(nums) {
  const result = [];
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > nums[i]) {
      stack.pop();
    }
    stack.push(nums[i]);
  }
  while (stack.length > 0) {
    result.unshift(stack.pop());
  }
}
