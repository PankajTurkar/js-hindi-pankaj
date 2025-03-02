/**
 * 1. Encapsulation is defined as the wrapping a data into single unit.
 * 2. It is the mechanisum to bind code and data together.
 * 3. In the JAvaScript Encapsulation is the process to bind data (variables) with functiona acting on the data
 * 
 * 
 * 
 * 
 */

class Student
{

constructor()
{
    let name, mark
}
getName() //getter method
{
    return this.name
}
setname(names) // setter method
{
 this.name = names

}
geMarks()
{
    return this.mark
}
setMarks(marks)
{
    this.mark = marks
}
}
// call this methods and variable need to create objects
let st = new Student()
st.setname("Pankaj")
st.setMarks(100)

console.log(st.geMarks, st.getName);
