import {test,firefox,chromium} from '@playwright/test'

/*test(`Launch app in normal browser mode`,async()=>{

    const context=await chromium.launchPersistentContext('./userData',{
        headless:false,channel:'msedge'})
    const page=await context.newPage();
    await page.goto('https://login.salesforce.com/')
    await page.waitForTimeout(3000)
})*/

test(`Launch app in normal browser mode with basic auth`,async()=>{
    // const userdatadir='./sessionInfo'
    const context=await chromium.launchPersistentContext('userdata',{
    headless:false,
    httpCredentials:{
        "username":"admin",
        "password":"testleaf"
    }
  })   
    const page=await context.newPage()
    await page.goto('https://www.leafground.com/auth.xhtml')
    await page.click("//span[text()='Basic Auth']")
    await page.waitForTimeout(3000)    

})