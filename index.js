// function fibs(num){
//     let arr=[0,1];
//     for(let i=2;i<num;i++){
//         arr.push(arr[i-1]+arr[i-2]);
//     }
//     return arr;
// }


// console.log(fibs(10));

//Recursion

function fibs(num){
    if(num==0){
        return 0;
    }
    else if(num==1){
        return [0,1];
    }
    else{
        let arr= fibs(num-1);
        arr.push(arr[arr.length-1]+arr[arr.length-2]);
        return arr;

    }
}

console.log(fibs(10));  