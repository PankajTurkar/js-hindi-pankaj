
//Find the duplicate char from the String

let str = "Pankaj".toLowerCase(); // Convert to lowercase to handle case sensitivity
let duplicates = [];
let charCount = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charCount[char]) {
        charCount[char]++; // Increase count if character already exists
    } else {
        charCount[char] = 1; // Initialize count if character appears for the first time
    }
}

// Loop through object to find duplicates
for (let key in charCount) {
    if (charCount[key] > 1) {
        duplicates.push(key);
    }
}

console.log("Duplicate characters:", duplicates);
