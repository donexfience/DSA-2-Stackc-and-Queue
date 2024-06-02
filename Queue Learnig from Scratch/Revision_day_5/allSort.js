function InsertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] < temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}
const array = [4, 5, 3, 22, 4, 123, 43, 21, 45, 65, 23, 15];
const result = InsertionSort(array);
console.log(result);
function SelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}
let result1 = SelectionSort(array);
console.log(result1);
    
function QuickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}
const result2 = QuickSort(array);
console.log(result2)