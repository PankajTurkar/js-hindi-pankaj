//how to convert first letter of string in uppercase
/**
 * charAt()- to get char at index
 * toUpperCase() - convert into the upper case
 * map() - it will return the new array
* slice() - to slice any characters from the string from given index.
 * 
 */

//Explanation of the code
//1. charAt(0).toUpperCase() → Gets the first character and converts it to uppercase.
//2. slice(1) → Extracts the rest of the string without modifying it.
//3. Concatenation (+) → Joins both parts to form the final word.

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage:
console.log(capitalizeFirstLetter("hello")); // Output: "Hello"
console.log(capitalizeFirstLetter("javascript")); // Output: "Javascript"

