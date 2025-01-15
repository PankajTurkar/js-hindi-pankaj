/**
 * //Premitive data types (stack memory): 7 types
 * String, Number, boolean,null(empty), undefined(no value assigned only memory space is allocated), symbol & BigInt
 * In Premitive you will ge the copy of the variable value of original variable. not get the refernce.
 * All the changes are happence inthe copy of the variable not in origional variable.
 * 
 * 
 * Non-premitive data types(Heap memory): (Reference data types (heap memory): 
 * Array, Objects & Functions
 * here you will ge the refernece i.e. original value for work
 * 
 * 
 * dataypes:
 * String -> string
 * Number-> number
 * undefined - undefined
 * null - object
 * function -> function
 * symbol - symbol
 * Array - object
 * 
 * 
 */

//Arrray
const hero =["Ajay", "Rahul"]

//object
let obj = {
    name : "rahul",
    lastName : "Sheety"
}

//Functions
const myfunction = function(){
    console.log("hello");
    

}
console.log(typeof hero);

//********************************************************* */

// stack (premitive - refernce) and Heap (non-premitive - )
// stack (premitive - refernce)  - value are changing

let myyoutbename = "chai"

let anotherName = myyoutbename

anotherName = "ChaiAurCode"

console.log(anotherName);

//Heap (non-premitive - )

let userOne ={
    name : "pankaj",
    email :"pankaj@yopmail.com"
}
let userTwo = userOne
userTwo.email = "pankaj@yopmail.com"

console.log(userOne.email);
console.log(userTwo.email);

