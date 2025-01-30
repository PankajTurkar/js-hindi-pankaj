console.log("*********************** using for loop*******************")
const arr = [1, 2, 3, 4, 55];
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log("Maximum value:", max); // Output: 55
console.log("Minimum value:", min); // Output: 1

console.log("*********************** using math function*******************");


const arr1 = [2, 3, 4, 55, 66];

// Find the maximum value
const max1 = Math.max(...arr1);

// Find the minimum value
const min1 = Math.min(...arr1);

console.log("Maximum value:", max1); // Output: 66
console.log("Minimum value:", min1); // Output: 2

/**
 * Explanation:
Spread Operator (...): Expands the array elements into individual arguments.
Example: Math.max(...arr) becomes Math.max(1, 2, 3, 4, 55).
Math.max and Math.min:

Math.max returns the largest value among the provided arguments.
Math.min returns the smallest value among the provided arguments.
 */