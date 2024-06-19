function Merge(array){
    if(array.length<2){
        return array;
    }
    let middle = Math.floor(array.length/2);
    let left = array.slice(0,middle);
    let right = array.slice(middle);
    return MergeSort(Merge(left),Merge(right))
}
function MergeSort(left,right){
    const sort =[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sort.push(left.shift())
        }
        else{
            sort.push(right.shift())
        }
    }
    return [...sort,...left,...right];
}
const s1 = Merge([4,4,3,2,5,6,7]);
console.log(s1);