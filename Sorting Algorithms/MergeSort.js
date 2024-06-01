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
const result = mergeSort([3, 4, 6, 7, 74, 23, 2, 5, 3, 6, 3, 3]);
console.log(result);
