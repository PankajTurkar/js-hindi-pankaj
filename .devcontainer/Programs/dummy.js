const arr = [1, 2, 3, 4, 55];
let max = arr[0]
let min = arr[0]

for (let i=0; i<=arr.length;i++){

    if(arr[i]>max){
        max = arr[i]
    }
    if(arr[i]<min){
        min = arr[i]
    }
}console.log("max value is ", max);
console.log("min value is ", min);
