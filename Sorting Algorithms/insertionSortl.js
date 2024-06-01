function insertionSort(array) {
  for (let i = 0; i <= array.length - 1; i++) {
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
const result = insertionSort([
  4, 53, 2, 6, 8, 5, 8, 44, 33, 3, 2, 5, 7, 22, 10,
]);
console.log(result);

function BubbleSorting(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
const result2 = BubbleSorting(array);
console.log(result2);

function MergeSort(array) {
  let middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);
  return Merge(mergeSort(leftArray), mergeSort(rightArray));
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

const result3 = MergeSort([3, 6, 45, 2, 6, 8, 54, 2, 2, 43, 23, 12]);
console.log(result3);
