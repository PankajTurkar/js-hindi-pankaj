let str = "Hello Pankaj";

// Step 1: Split the string into array of the words
let revName = str.split(" ")  // ["Hello", "Pankaj"]

// Step 2: Reverse each word individually
    .map(word => word.split("").reverse().join("")) // ["olleH", "jaknaP"]

// Step 3: Join the words back into a sentence/string

    .join(" "); // "olleH jaknaP"

console.log(revName);
