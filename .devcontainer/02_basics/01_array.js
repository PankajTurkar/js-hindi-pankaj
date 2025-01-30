// SUMMARRY:

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4. Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7. Join = converts to string (retuen type is String).
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
// => 18:25 slice() does not manupulate main array.
// => splice() manupulate original array.

 const array1 = [0,1,2,3,4,5,6]

// //What is Shallow Copy and Deep copy?
// // -> Shallow copy of an object is a copy whose property share the same refernece. 
// means if you change anything it will update teh orginal value
// //Deep Copy of an object is a copy whose property does not share the same refernces.

// //Array methods
// array1.push(7) // at the end
// console.log(array1);

// array1.unshift(10)
// console.log(array1); // add at the begining

// array1.shift()
// console.log(array1); // remove from the begining

// array1.includes(1) // check the present of the element in an array1
// // console.log(array1);

// console.log(array1.indexOf(3))


// Slice and Splice methods differnce

console.log("A ", array1);
const newArray = array1.slice(0,3)

console.log(array1);
console.log("B", newArray);



const newArray1 = array1.splice(0,4)

console.log(array1);
console.log("C",newArray1);

// Key Differences:
// Modification: slice creates a new array, while splice modifies the original array.
// Purpose: slice is used to extract a portion of an array, while splice is used to add, remove, or replace elements within an array.
// Return Value: slice returns a new array containing the extracted elements, while splice returns an array containing the deleted elements (if any). 