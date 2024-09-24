/*Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. 
*/

/*
let first = "Rajesh"
let snd = "jaejsh"
var isthere = true;

if (first.length == snd.length) {
    for (let i = 0; i < first.length - 1; i++) {

        for (let m = 0; m < snd.length - 1;) {

            if (first.charAt(i) === snd.charAt(m)) {
                //console.log(first.charAt(i+1)+ ' is available in '+ m+ ' string')
                break;
            }
            if(first.charAt(i) != snd.charAt(m)) {
                m++;
            }
                       
        }

    }
}
else {
    console.log('Length is not matching cannot check anagram')
}
*/

let firstTxt = 'suresh'
let secondTxt = 'usresh'

if(firstTxt == secondTxt)
{

    for(let i=0; i<firstTxt.length;i++)
    {
        for(let m = 0; m<firstTxt.length;){
            if(firstTxt.charAt(i) === secondTxt.charAt(m)){
                break;
            }
            if(firstTxt.charAt(i) != secondTxt.charAt(m))
                {
                    m++;
        
                }
                
        }console.log(firstTxt.charAt(i) +' is correct position in second')
        
    }


}
else{
    console.log('Length is not matching cannot check anagram')
}