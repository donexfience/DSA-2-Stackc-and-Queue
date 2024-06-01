function SelectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != j) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
    
  }
  return array
}
const result4 = SelectionSort([
  3, 5, 6, 4, 1, 324, 45, 66, 33, 1, 23, 13, 64, 15,
]);
console.log(result4);
