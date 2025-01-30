//How to Find missing elements in a given Array 1 to 10.

let arr = [1, 2, 4, 6, 7, 9, 10]; // Given array (missing elements: 3, 5, 8)
let missingNumbers = [];

for (let i = 1; i <= 10; i++) { // Loop from 1 to 10
    if (arr.indexOf(i) === -1) { // If number is not in the array
        missingNumbers.push(i); // Add to missing numbers list
    }
}

console.log("Missing numbers:", missingNumbers);

/**
 *  Explanation:
Loop from 1 to 10 (expected range).
Check if each number exists in the given array using .indexOf().
If not found (-1), push it into missingNumbers array.
Print the missing numbers.
 */