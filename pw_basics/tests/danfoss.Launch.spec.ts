import test, { chromium, expect } from "@playwright/test";

test('Launch Danfoss.com home page', async()=>{

    const bContext = await chromium.launch({headless:true})
    const newContext = await bContext.newContext()
    const page = await newContext.newPage()
    await page.goto("https://www.danfoss.com")
    await page.locator(".coi-banner__accept").first().click()
    await page.locator('[data-testid="menu-arrow-icon"]').first().click()
    await page.locator('text=Cylinders').click()
    await page.locator('#header-search-input').fill("Pumps")
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000);
    const innerText = await page.locator('.page-heading').innerText()
    console.log(innerText)
    const tabList = await page.locator('.filterable-list__tab-label').all();
    
    for(let i=0; i<=tabList.length-1; i++)
    {
         let newxStr = (await tabList[i].innerText()).replace(/[0-9]/g, "").replace(/[^\w\s]/g, "").trim()
         console.log(newxStr)
         if(newxStr === 'Documents'){
            console.log("Document is available")
            break
            } else 
            {
                console.log("Some issue")
            }
    }
   
   // await expect(page.locator('.filterable-list__tab filterable-list__tab--active')).toBeVisible({timeout: 10000})
   // await page.waitForTimeout(3000);
   // await page.locator('text=Business unit').first().click()
   // await page.locator('text=Power Solutions').first().click()
})