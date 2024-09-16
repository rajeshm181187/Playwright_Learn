const numarr = [2,4,5,2,1,2, 6, 7,7,7]

const k=7;

let count = 0

for(let i =0; i<=numarr.length-1; i++)
{
    if(numarr[i] === k )
    {
        count++;
    }
    
}
console.log(count)