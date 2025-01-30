//how to find prime number in Javascript.(Number devided by 1 or itself only called prime number)

num =7

for (let i=2; i<=num; i++){
    if(num%i ==0){
        console.log("not a prime number", num);
        break
    }else{
        console.log("numer is prime number", num);
        
    }
}