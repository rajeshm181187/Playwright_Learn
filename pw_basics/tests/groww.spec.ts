import test, { chromium } from "@playwright/test";

test.skip('groww', async ()=> {

    const bContext = await chromium.launch({headless:true})
    const newContext = await bContext.newContext()
    const page = await newContext.newPage()
    await page.goto("https://groww.in/mutual-funds/sundaram-smile-fund-direct-growth")
    //await page.waitForTimeout(3000)
    await page.locator('.holdings101TableContainer').scrollIntoViewIfNeeded()
    await page.locator('text=See All').click()
   // await page.waitForTimeout(3000)    
   
    let empName1= ['']
    let empPr1 = ['']
    let overAll = [ [''], ['']]
    type holdings={
        companyName:String
        companyPercent:String
    }
    let orgName = page.locator('td.holdings101CompanyName.bodyBase > a > div')
    let orgPercent= page.locator('//td[@style="padding-right: 3%; padding-top: 16px; padding-bottom: 16px; text-align: right;"]')
    for(let  i=0; i<=await orgName.count()-1; i++)
    {
        let empName:holdings={companyName:await orgName.nth(i).innerText(), companyPercent:await orgPercent.nth(i).innerText()}
        overAll.push([await orgName.nth(i).innerText(), await orgPercent.nth(i).innerText()])
       // overAll.push(empName1.push(await orgName.nth(i).innerText()))
        //empPr1.push(await orgPercent.nth(i).innerText())
        //console.log(await orgName.nth(i).innerText())
        //console.log(await orgPercent.nth(i).innerText())
        
       // console.log(empName)       
       
    }
    //empName1.shift()
       // empPr1.shift()
        //console.log(empName1)
        overAll.shift()
    console.log(overAll)
        
    })
    //console.log(newLocal)
    //let allComp = await page.locator('.contentPrimary cur-po').all()
   