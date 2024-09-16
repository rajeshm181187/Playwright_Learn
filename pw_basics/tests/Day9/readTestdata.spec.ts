import test from "playwright/test"
import testData from '../../data/testData.json'

import fs from 'fs'
import path from "path";

//const testDataPath = path.join(__dirname, '../../data/testData.json');
//const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));
for(const user of testData){
    test.only(`Read data from JSON file ${user.testCaseID}`,async({page})=>{
        await page.goto("https://login.salesforce.com/")
        await page.fill("#username",user.userName)
        await page.fill("#password",user.password)
        await page.click("#Login")    
    })
}











/*
//const loginData=fs.readFileSync(path.resolve("../../data/login.json"),'utf-8')
//path.join("folder","subfolder","filename")
//console.log(loginData)
//convert json -->object -->array
//const userCredentials=JSON.parse(loginData)


const userData=JSON.parse(fs.readFileSync(path.join(__dirname,"../../data/login.json"),'utf-8'))


userData.forEach(element => {
    test(`Read data from JSON file using fs ${element.testcaseId}`,async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username",element.username)
        await page.fill("#password",element.password)
        await page.click(".decorativeSubmit")    
    })
    });   


const oneData=JSON.parse(fs.readFileSync(path.join(__dirname,"../../data/singleData.json"),'utf-8'))


test(`Read data from JSON file using fs with individual data ${oneData.testcaseId}`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",oneData.username)
    await page.fill("#password",oneData.password)
    await page.click(".decorativeSubmit")    
})*/