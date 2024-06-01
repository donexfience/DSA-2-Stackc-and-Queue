function BubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.lengtth - 1; j++) {
      if (array[i] < array[j]) {
        let temp =array[i];
        array[i] =array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
const result1 = BubbleSort([4,6,4,3,7,54,4,7,54,7,3,87,55]);
console.log(result1);
