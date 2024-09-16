/*
//Declaration of an Array


//literal declaration
let companyName=["Testleaf","Qeagle","Thoughtwork","HCL"]


//Object/constructor
let numberArr=new Array(1,2,3,4)


//empty array
let orgName=[];


console.log(companyName)


//length of the array
console.log(numberArr.length)


console.log(companyName.length)



//to get the index based elements
//index of array starts with 0;



console.log(companyName[0])
//last element of the array
console.log(companyName[companyName.length-1]) //0 -->last ele -->3


companyName[5]="Wipro"
console.log(companyName)


//to add or remove the elements from the array
//push, unshift -->add
//pop,shift -->remove


companyName.push("Infosys") //add the ele at the end of the array
console.log(companyName)


companyName.unshift("TCS") //add the ele at the first of the array
console.log(companyName) 


companyName.pop() //remove the ele from the end of the array
console.log(companyName) 


companyName.shift() //remove the ele from the first of the array
console.log(companyName) 


//get the subarray of the array ele
let comName=companyName.slice(2,4) 
console.log(comName)


//splice ->to remove elements based on index and delete count and also to add with new value
companyName.splice(1,2,"CTS","Qeagle")
console.log(companyName)


for(let index=0;index<comName.length;index++){
console.log(companyName[index])
}


//merge array


let empArray=["Vinod","Vidya","santhosh","Farsana"]


let empDetails=empArray.concat(companyName)
console.log(empDetails)


//spread syntax 
let arr=[...empDetails,"Rajesh","Vaishanavi"]
console.log(arr)


//hetrogeneous -->multiple data with different datatype
//include number, string boolean


let hetroArray=["Sriram",78637489303,true]
//nested array


let nestedArray=["Chrome",120,true,["firefox",1]]


let array=nestedArray[3];
console.log(array[0])
*/

let rajSons = ["Pughazh"]
console.log(rajSons)

rajSons.push("Guru Vishnu")
console.log(rajSons)

rajSons.unshift("Guru Vishwa")
console.log(rajSons)
let parents = ["Roja", "Mani"]

console.log(rajSons.concat(parents))