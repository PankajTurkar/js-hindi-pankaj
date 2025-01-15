array1 = [1,1,1,1,1]
array2 = [2,2,2,2,2]

const newarray = array1.concat(array2)
console.log(newarray)

const allnewhearo = [...array1, ...array2]
console.log(allnewhearo);

const pusharray = array1.push(array2)
console.log(pusharray);

multiplwarray = [1,2,3,[4,5,6],3,4,[7,[8,9],10]]

const flatarray = multiplwarray.flat(Infinity)
console.log(flatarray);

//How to convert anything to array

string = "Hitesh"
console.log(Array.isArray("string"));
console.log(Array.from("Hitesh"));

//Create new array from set of elements

const score =100
const score1 = 200
const score3 =300

console.log(Array.of(score, score1, score3));
