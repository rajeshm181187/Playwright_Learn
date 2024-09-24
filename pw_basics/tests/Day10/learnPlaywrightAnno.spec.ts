import test from "@playwright/test"

test.describe(`Grouping salesforce and Leaftaps application`,{tag: '@smoke'},async()=>{
    test.describe.configure({mode: "parallel"})
   
    test(`Learn test annotations for grouping `,{tag:["@smoke","@regression"]},async({page})=>{   
        await page.goto("https://login.salesforce.com/")
        await page.fill("#username","vidyar@testleaf.com")
        await page.fill("#password","Sales@123")
        await page.click("#Login")    
        await page.click(".slds-icon-waffle")   
    })
    
    
    test(`Learn test annotations using describe `,{tag:"@regression"},async({page})=>{   
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username","demoSalesManager")
        await page.fill("#password","crmsfa")
        await page.click(".decorativeSubmit")    
        await page.click()
           })
        })
    
    
    
    