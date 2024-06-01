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
  
  const result = QuickSort([3, 4, 5, 2, 65, 34, 2, 54, 66, 71, 12, 45]);
  console.log(result);
  