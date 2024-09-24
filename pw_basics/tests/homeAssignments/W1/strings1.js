/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. */

const prompt = require("prompt-sync")();
let userText = prompt("Enter the sentence with multiple words:  ", "sd")

let arrayText = userText.trim().split(' ')

let lastWordlength= arrayText.length
console.log('Length of last word is: ' +arrayText[lastWordlength-1].length +' and last word is: '+arrayText[lastWordlength-1])