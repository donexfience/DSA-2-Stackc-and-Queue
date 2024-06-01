function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
const result = BubbleSort([3, 4, 5, 4, 65, 34, 22]);
console.log(result);
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
const result2 = InsertionSort([3, 4, 5, 4, 65, 34, 22]);
console.log(result2);
const MergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  return Merge(MergeSort(left), MergeSort(right));
};
function Merge(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}
let result3 = MergeSort([3, 4, 5, 4, 65, 34, 22]);
console.log(result3);

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
const result4 = QuickSort([3, 4, 5, 4, 65, 34, 22]);
console.log(result4);

function SelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if(min !=i){
        let temp =array[min];
        array[min] =array[i];
        array[i] = temp
    }
  }
  return array
}

const result5 = SelectionSort([3, 4, 5, 4, 65, 34, 22]);
console.log(result5);