
/*
//Type alias
//object literal -->obj with value
type dimension={
    height:number
    width:number
}


let Rec:dimension={height:123,width:45}
let sq:dimension={height:24,width:24}
console.log(Rec) 





//union type -->either or 


type empDetails=string|number|boolean


let empName:empDetails="Lavanya"
empName=12345


type supportedBrowser="chrome"|"firefox"


function launchBrowser(browserName:supportedBrowser){
    if(browserName==="chrome"){
        console.log("Launch ChromeBrowser")
    }else if(browserName==="firefox"){
        console.log("Launch firefox")
    }
}
launchBrowser("chrome")


type url=string|null


let urlInfo:url


let x:string;
let y:string;


function cal():number|void{
   console.log(x+y) 
}


function math(x:number,y:number):number{
   return x;
}



//intersection type --> multiple datatypes  
type manager={name:string,dept:string}


type employeeDta={userid:number,phno:number}


//type empPayroll=manager & employeeDta


let employee:employeeDta & manager={phno:7836289204,userid:45678,name:"Vidya",dept:"QA"} 


console.log(employee)npm
*/

type supportedBrowser = "Chrome" | "Edge"
type browserVersion = 127 | 126

type browserProfile = supportedBrowser & browserVersion

function launchBrowser(browser:browserProfile){
    if(browser==="chrome"){
        console.log("Launch ChromeBrowser")
    }else if(browser==="firefox"){
        console.log("Launch firefox")
    }
}


        
