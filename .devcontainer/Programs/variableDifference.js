// There are a few other differences between var, let and const.
// 1. Var can be redeclared while let and const cannot be redeclared.
// 2. Both var and let can be declared without assigning a value while const 
// needs to have a value assigned when you are declaring it.
// 3. Additionally during JS execution var is "hoisted" therefore all the var variables 
// are first brought to the start of your code by JS and 
// with an undefined value, before it executes your code. 
// Let and const are not "hoisted" in the sense of the word but are instead stored in temporal 
// dead zone (a memory allocated used to store such variables for the time between declaration 
// and initialization).