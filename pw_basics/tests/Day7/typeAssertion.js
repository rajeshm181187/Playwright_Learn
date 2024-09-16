//Using as keyword
// let value:any = "Playwright Automation";
// let stringCount:number = (value as string).length;
// console.log(stringCount);
// console.log(`${typeof value} ${typeof stringCount}`);
//Using angular brackets
var value = "Playwright Automation";
var stringCount = value.length;
console.log(stringCount);
console.log("".concat(typeof value, " ").concat(typeof stringCount));
function userRegistration(fName, lName, phone, surName, age) {
    console.log("The user details are ".concat(fName, ", ").concat(lName, ", ").concat(phone, ", ").concat(surName, ", ").concat(age));
}
//Calling the function
userRegistration("Vinod", "Krishna", 987654321, "Srinivas");
function empProfile(name, dob, userId, status) {
    if (status === void 0) { status = "Available"; }
    console.log("User profile: ".concat(name, ", ").concat(dob, ", ").concat(status, ", ").concat(userId));
}
empProfile("Ravindran", "03/04/1995", 44);
