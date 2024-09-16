//Using as keyword


// let value:any = "Playwright Automation";
// let stringCount:number = (value as string).length;
// console.log(stringCount);
// console.log(`${typeof value} ${typeof stringCount}`);


//Using angular brackets
let value:any= "Playwright Automation";
let stringCount:number = (<string>value).length;
console.log(stringCount);
console.log(`${typeof value} ${typeof stringCount}`);



function userRegistration(fName:string, lName:string, phone:number, surName?:string, age?:number):void {
console.log(`The user details are ${fName}, ${lName}, ${phone}, ${surName}, ${age}`);
}
//Calling the function
userRegistration("Vinod", "Krishna", 987654321, "Srinivas");



function empProfile(name:string, dob:string, userId?:number, status:string= "Available", ){
console.log(`User profile: ${name}, ${dob}, ${status}, ${userId}`);
}
empProfile("Ravindran", "03/04/1995", 44);