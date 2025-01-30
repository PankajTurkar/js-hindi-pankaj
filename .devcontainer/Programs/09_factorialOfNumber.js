//how to find fictorial of a given number 5 in Javascript 5=1*2*3*4*5 =120
num = 5
factorial =1

    if(num<0){
        console.log("finding factorial of negative numbers are not possbile");
        
    }
    else
    {
        for(let i=1; i<=num; i++)
        {
            factorial = factorial*i
        }
        console.log(factorial);
    }
