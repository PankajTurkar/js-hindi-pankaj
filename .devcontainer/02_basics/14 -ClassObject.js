/**Calss and Objects
 * 
 * 
 */

// class Student
// {

//     setDetails()
//     {
//         //If we want to variable belongs to the class levl and from method, then we can use  this keyowrd
//         this.sid=101;
//         this.sname ="john" 
//         this.sgrade = "A"
//     } 
//     display()
//     {
//         //accessign class elements
//         console.log(this.sid, this.sname, this.sgrade);
       
         
//     }
// }

// let st = new Student();

// st.setDetails()
// st.display()

console.log("Another way to to write method by passing arguments")

// class Student
// {

//     setDetails(rollNo, fname, Lname)
//     {
//         this.sid =rollNo
//         this.sname = fname
//         this.lname =Lname

//     }   

//     display()
//     {
//         console.log(this.sid, this.sname, this.lname);
        
//     }
// }

// let stu = new Student()
// stu.setDetails(103, "John", "Mozilaa")
// stu.display()

console.log("Another way to to write method by using constructor passing arguments")

//This can be ahive using constructor.
//1. Constructor can be use to initilize the data
//2. It will invoke automatically while object creation
//3. use keyword constructor to create constructor
//4. Contructor can have values or not.

class Student
{
    constructor(rollNo, Fname, Laname)
    {
        this.sid = rollNo
        this.sname = Fname
        this.lname = Laname
    }

    display()
    {
        console.log(this.sid, this.sname, this.lname);
        
    }
}
let stud = new Student(104, "Ajay", "Kumar")
stud.display()