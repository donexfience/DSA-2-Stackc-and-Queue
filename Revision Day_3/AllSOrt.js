function InsertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}
const result = InsertionSort([3, 2, 6, 237, 32, 2, 8, 4, 76, 523, 23]);
console.log(result);

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

const result2 = QuickSort([3, 4, 5, 2, 65, 34, 2, 54, 66, 71, 12, 45]);
console.log(result2);

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const letftArray = array.slice(0, mid);
  const RightArray = array.slice(mid);
  return Merge(mergeSort(letftArray), mergeSort(RightArray));
}
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
const result3 = mergeSort([3, 4, 6, 7, 74, 23, 2, 5, 3, 6, 3, 3]);
console.log(result3);

