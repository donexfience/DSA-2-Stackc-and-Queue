const array = [3, 5, 23, 76, 2, 33, 52, 54, 21, 45, 32];
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
  console.log(array)
}
function InsertionSort(array){
    for(let i =0;i<array.length;i++){
        let temp =array[i]
        let j= i-1;
        while(j>=0 && temp>array[j]){
            array[j+1] = array[j]
            j--;
        }
        array[j+1] = temp;
    }
    console.log(array)
}
function MergeSort(array){
    if(array.length<2){
        return array;
    }
    let middle = Math.floor(array.length/2);
    let leftArray = array.slice(0,middle);
    let rightArray = array.slice(middle);
    return Merge(MergeSort(leftArray),MergeSort(rightArray));
}
function Merge(leftArray,rightArray){
    const sortedArray = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0]<rightArray[0]){
            sortedArray.push(leftArray.shift())
        }
        else{
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray,...leftArray,...rightArray]
}
InsertionSort(array);
BubbleSort(array)
const MergeResult = MergeSort(array);
console.log(MergeResult)

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
const QuickResult = QuickSort(array);
console.log(QuickResult)

function SelectionSort(array){
    for(let i=0;i<array.length;i++){
        let min = i;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[min]){
                min =j;
            }
        }
        if(min != i){
            let temp =array[i];
            array[i] =array[min];
            array[min] =temp
        }
    }
    console.log(array)
}

SelectionSort(array)