import {test as baseTest} from '@playwright/test'

export const test=baseTest.extend({loginFixture:async({page},use)=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")    
    
    //await page.context().storageState({path:"loginCredentials.json"})
    await use(page);
}})





