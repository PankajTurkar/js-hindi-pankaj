const arr = [1, 2, 33, 4, 11,55];

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
