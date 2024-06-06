function InsertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && temp > array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  console.log(array);
}
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

function QuickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let left = [];
  let right = [];
  let pivot = array[array.length - 1];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}
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
const pz =selectionSort([4,5,4,3,64,56321,4565,42,421,12,45,112])
console.log(pz)
