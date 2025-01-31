//how to find prime number in Javascript.(Number devided by 1 or itself only called prime number)
//2,3,5,7,11,13,17,19
let num = 6;
let isPrime = true; // Assume number is prime initially

if (num < 2) { 
    isPrime = false; // Numbers < 2 are not prime
} else {
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) { 
            isPrime = false; // Found a divisor, not a prime
            break; // No need to check further
        }
    }
}

if (isPrime) {
    console.log(`Is a prime number: ${num}`);
} else {
    console.log(`Not a prime number: ${num}`);
}
