//Find the Duplicate Number from the array?

/**
 * arr.filter(callback):
The filter() method creates a new array containing elements that satisfy the condition in the callback function.
Callback Parameters:
ele: The current element being processed.
index: The current index of ele in the array.
arr: The entire array (arrNumber) being filtered.
Logic in the Callback:

arr.indexOf(ele):
Finds the first index of the element ele in the array.
arr.indexOf(ele) !== index:
Checks if the current element's first occurrence is not at the current index.
If ele has been encountered earlier, this condition will be true (indicating a duplicate).
 * 
 */
//const arrNumber =[1,2,3,2,4,6,7,8,9,5,4,3]
//const duplicateArray = arrNumber.filter((ele, index, arr)=>arr.indexOf(ele)!==index)
//console.log(duplicateArray);

/**
 * 1. For loop
 * running the loop for iterating to the array elements
 * 2. Comparison:
   Checks if arrNumber[i] === arrNumber[j] to identify duplicates.
   3. Avoid Adding Duplicates Twice:
    Used !arr1.includes(arrNumber[i]) to ensure duplicates are added only once to the result array.
Output:
The final array arr1 contains all the duplicate numbers.
 */
const arrNumber =[1,2,3,2,4,6,7,8,9,5,1,4]
let num=0
let arr1 = []

for( let i=0; i<=arrNumber.length; i++){

    for(let j=i+1; j<=arrNumber.length; j++){

        if(arrNumber[i] == arrNumber[j] && !arr1.includes(arrNumber[i])){
            arr1.push(arrNumber[i])
        }
    }


}console.log(arr1);
/**
 * 
 */