//how to swap two variables without using the third

let a=1
var b =2


console.log("-----Using third variable logic------")
let temp = a
a=b
b=temp

console.log("swapped value of a is",a);
console.log("swapped value of b is",b);

// console.log("-----Withpout third variable logic Array distructuring--------")
// c=10
// d=11
// //here we can use array destructuring intriduced in ES6 version
// [c, d] =[d, c] // Swap values using array destructuring

// console.log("swapped value of a is",a);
// console.log("swapped value of b is",b);


console.log("-----With third variable other logic-------")

e=5
f=6

g = e+f
f = g-f
e = g-e
console.log("value of f is ", f);
console.log("value of e is ", e);
