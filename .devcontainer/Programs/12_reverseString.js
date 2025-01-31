//how to reverse a string in Javascript|

let reverseString = "butter"

var strToArray = reverseString.split("") // converting string to array so that we can use reverse() function
console.log(strToArray) // converted to array
console.log(typeof(strToArray));
console.log(strToArray.reverse());

console.log("=============================================");


let str = "abc"
for( let i=str.length; i>=0; i--){
    console.log("reverse:", str[i]);
    
}