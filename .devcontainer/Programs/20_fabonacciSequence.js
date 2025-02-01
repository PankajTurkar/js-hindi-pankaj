//how to find fibonacci sequence in javascript

//The fabonacci sequence is the integer sequence where the first two terms as 0 and 1.
//after that next term is defined as sum of last two number 

//0,1,1,2,3,5,8

let num =10
fabnum =0

for (let i=0;i<=num; i++)
{
    for (let j=1;j<=num;j++)
    {
        fabnum = i+j
        console.log(fabnum);
    }
}
