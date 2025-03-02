/**
 * 1. static keyword are used for memory management.
 * 2. If you want to change value at project level , then no need change it as every places. just mark it as static
 * 3. static can be variable and methods.
 * 4. using class name we can access staic 
 * 5. it will occupy memory at once.
 * 6. we can update the value of static variable anytime.
 */

class Test
{
    static a= 10
    b =20


static m1()
{
    console.log("This is static method")
}

m2()
{
    console.log("Thisis non-static method");
    
}
}
//accessing static using class name
console.log(Test.a) //10
console.log(Test.b); // Undefined for non static

Test.m1()
//Test.m2() //TypeError: Test.m2 is not a function

// to access non sttaic var and method we have to create object
let obj = new Test()
console.log(obj.b) //20
obj.m2()
