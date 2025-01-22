// const arr = [1, 2, 3, 4, 55];
// let max = arr[0]
// let min = arr[0]

// for (let i=0; i<=arr.length;i++){

//     if(arr[i]>max){
//         max = arr[i]
//     }
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }console.log("max value is ", max);
// console.log("min value is ", min);




const arr = [1, 2, 33, 4, 5];
let largest = 0;
let secondLargest = 0;

for (const num of arr) {
  if (num > largest) {
    secondLargest = largest; // Update second largest
    largest = num; // Update largest
  } else if (num > secondLargest && num < largest) {
    secondLargest = num; // Update second largest only
  }
}

console.log("Second Largest:", secondLargest); // Output: 5
