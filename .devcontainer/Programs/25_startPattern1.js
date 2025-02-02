//How to print star pattern in diamond shape in js
/*
*
**
***
****
*****
******
*/

console.log("right Trangle");

//use first for loop for how many lines to print


for (let i=1; i<=6;i++){
    let row = ''
    for(let j=1;j<=i;j++){
        row += "*"
        //row =row + '*'
    }
console.log(row);


}
