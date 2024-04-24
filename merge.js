function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let result=[];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr = [5,6,8,2,1,7];
const sort = mergeSort(arr);
console.log("Sorted Array:",sort);

