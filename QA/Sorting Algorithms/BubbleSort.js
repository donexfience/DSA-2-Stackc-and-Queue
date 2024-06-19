function BubbleSort(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]<array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log(array)
}
function InsretionSort(array){
    for(let i=0;i<array.length;i++){
        let temp =array[i];
        let j= i-1;
        while(j>=0 && temp < array[j]){
            array[j+1] = array[j]
            j--;
        }
        array[j+1] = temp
    }
    console.log(array)
}
function SelectionSort(array){
  for(let i=0;i<array.length;i++){
      let min = i;
      for(let j=i+1;j<array.length;j++){
          if(array[min]>array[j]){
              min = j;
          }
      }
      if(min !==i){
          let temp = array[i];
          array[i] = array[min];
          array[min] = temp;
      }
  }
  console.log(array);
}
function QuickSort(array){
    if(array.length<2){
        return array;
    }
    let pivot = array[array.length-1];
    let left =[];
    let right =[];
    for(let i=0;i<array.length-1;i++){
        if(array[i]<pivot){
            left.push(array[i])
        }
        else{
            right.push(array[i])
        }
    }
    return [...QuickSort(left),pivot,...QuickSort(right)];
}
function MergeSort(array){
    if(array.length<2){
        return array
    }
    const middle = Math.floor(array.length/2);
    let left = array.slice(0,middle);
    let right = array.slice(middle);
    return Merge(MergeSort(left),MergeSort(right))
}
function Merge(left,right){
    const sortedArray =[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArray.push(left.shift())
        }
        else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right];
}
let result = BubbleSort([54,46,234,6,45,12,67,23])
console.log(result)
let result2 = InsretionSort([54,46,234,6,45,12,67,23])
console.log(result2)
let result3 = SelectionSort([54,46,234,6,45,12,67,23])
console.log(result3)
let result4 = QuickSort([54,46,234,6,45,12,67,23])
console.log(result4)
let result5 = MergeSort([54,46,234,6,45,12,67,23])
console.log(result5)