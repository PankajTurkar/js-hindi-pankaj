str = "a big  cat"

let statment = str.trim().split(/\s+/)

word = "cat"

let length =0

if(statment.includes(word))
{
    length = word.length
}else{

        length = 0
    }
console.log(length)