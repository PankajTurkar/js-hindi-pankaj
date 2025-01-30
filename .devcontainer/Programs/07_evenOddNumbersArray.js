//how to find even or odd numbers in array in javascript?

const arr = [1,2,3,6,8,10,16]

for (const i of arr){
    if(i%2 === 0){
        console.log("even numbers are ", i);
        
    }
    else{
        console.log("odd numbers are", i)
    }

}