//How to compare two Arrays are Equal or Not in JavaScript

arr1 =[1,2,3]
arr2 =[1,2,4]
arr3 = false;

for(let num of arr1)
{
    for (let num1 of arr2){
        if (num == num1){
            arr3 =true
            
        }else{
            arr3=false;
        }
            
        
    }
}console.log(arr3)

console.log("===============================================");
console.log("Alternative Approach: Comparing Arrays Regardless of Order")

let arrayEqual = arr1.sort().toString() == arr2.sort().toString()
console.log(arrayEqual);

/**
 * The .sort() method sorts both arrays in place (modifies the original array).
    This ensures that the order of elements in both arrays is the same before comparison.

    The .toString() method converts the sorted arrays into comma-separated strings.

    [3, 1, 2].sort().toString(); // "1,2,3"

    "1,2,3" === "1,2,3"  // true
    "1,2,3" === "1,2,3,4"  // false


 */