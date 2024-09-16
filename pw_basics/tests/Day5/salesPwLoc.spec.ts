import test from "@playwright/test";

test('playwright locator with salesforce', async({page})=>{

    await page.goto("https://login.salesforce.com/")   
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator("#password").fill("Sales@123")
     await page.locator("#Login").click()
     await page.getByTitle("App Launcher").click({timeout:12000})   
     await page.getByText("View All").click()
     await page.getByPlaceholder("Search apps or items...").fill("Service")
     await page.getByRole("link",{name:"Service",exact:true}).click();
     await page.waitForTimeout(5000)
     await page.getByTitle('Accounts').filter({hasText: 'Accounts'}).click()
     await page.waitForTimeout(5000)
     await page.locator('.forceActionLink').first().click()
   //Click on Accounts
   //click on new

})