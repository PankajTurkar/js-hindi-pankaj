//how to find palindrome in javascript
// madam or 1881

var name1 = "madam";
name1 = name1.toLowerCase(); // Convert to lowercase for case-insensitive check

let reversedText = name1.split('').reverse().join(''); // Split → Reverse → Join(Converts the reversed array back to a string for comparison)

if (name1 === reversedText) {
    console.log("Palindrome: Matched");
} else {
    console.log("Not a Palindrome");
}
