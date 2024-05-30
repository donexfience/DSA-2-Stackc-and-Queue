function BubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
const array = [4, 5, 32, 7, 3, 8, 23, 8, 4, 2, 24, 46, 22, 67];
console.log(array);
BubbleSort(array);
console.log(array);

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
const result = BubbleSorting(array);
console.log(result);
