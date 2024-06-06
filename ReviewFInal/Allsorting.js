function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = array[min];
      array[min] = array[i];
      array[i] = temp;
    }
  }
  return array;
}
const result1 = selectionSort([6, 5, 34, 76, 45, 12, 45, 21, 32, 88]);
console.log(result1);

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
const result2 = InsertionSort([
  5, 6, 7, 43, 23, 12, 3, 4, 3, 78, 5, 4, 6, 78, 7,
]);
console.log(result2);
function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
const result3 = BubbleSort([4, 5, 23, 2, 267, 54, 213, 34, 76]);
console.log(result3);

function MergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return Merge(MergeSort(left), MergeSort(right));
}
function Merge(left, right) {
  const sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}
const result4 = MergeSort([4, 57, 236, 56, 3, 23, 12, 334, 12]);
console.log(result4);

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
const result5 = QuickSort([4, 6, 43, 23, 56, 65, 43]);
console.log(result5);
