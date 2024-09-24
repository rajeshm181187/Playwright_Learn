/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/
// First problem
/*let  val = 5;
let sum = 0;
for (let index = 0; index <= 5; index++) {
    sum = sum + index;    
}
console.log(sum)
*/


// Second problem
let sum = 0;
let final =""
for (let index = 1; index <=10 ; index++) {
    sum = sum+index
    let output = (index+ '('+sum+')')
     final = (final.concat(output+ ',') )
     
}
let n = final.length
//console.log(final.charAt(n-1))
console.log(final.substring(0,n-1))
console.log('sum of numbers from 1- 10 is '+sum)