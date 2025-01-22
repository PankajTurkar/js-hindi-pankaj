//Objects in depth in javascript in hindi
// object can be define in two ways object Literal and constructor
// //Singletone :- When we create Constructor then singletone (single) object is created.
//Object Literal :- 

const jsuser = {
    name : "pankaj",
    fullName : "pankaj Turkar",
    age : 30,
    email : "pankaj@gmail.com",
    lastLoginDay: ["Monday", "Saturday"],
    isLoginIn : false

}
console.log(jsuser.email);
console.log(jsuser["email"]); //need to pass in [""] as key is considered as string in object but when we call
//with . then it will default considered as string console.log(jsuser.email);




