import test from "@playwright/test";


test('handling windows', async({page, context})=> {

    await page.goto("https://login.salesforce.com/")   

    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator("#password").fill("Sales@123")
     await page.locator("#Login").click()
     await page.waitForLoadState("load")
     console.log(page.url());
     const pagePromise = context.waitForEvent('page');
     await page.locator('text=Learn More').click()
     const newPage1 = await pagePromise;
     console.log(newPage1.title());
})

/*

test("Hnadling window with sequential approach", async ({ page, context }) => {


    await page.goto("https://www.leafground.com/window.xhtml")
    console.log(await page.title())
    //create a promise w.r.t page 
    const pagePromise = context.waitForEvent('page')
    await page.getByText("Open", { exact: true }).click(); //actual action to be performed which opens a page
    //resolve the promise to have the reference of new page
    const newPage = await pagePromise;
    console.log(newPage.url())
    console.log(await newPage.title())
    // await newPage.bringToFront();
    await newPage.locator("#email").fill("vidya@gmail.com")
    await newPage.waitForTimeout(3000)


})
    
 await page.goto("https://www.leafground.com/file.xhtml")


    //using setInput files


    await page.locator(".card").filter({hasText:"Basic Upload"})
    .locator("input[type='file']").setInputFiles("./tests/day08/servicenow.txt")
    //using fileChooser
     const filePromise= page.waitForEvent('filechooser')
     await page.locator("[class$='ui-icon-plusthick']").last().click()
     const fileupload=await filePromise;
     const boolean= fileupload.isMultiple()
     await fileupload.setFiles(["./tests/day08/testleaf_logo.jpeg","./tests/day08/sf.jpg"])







test.only("File Download",async({page})=>{
    
    await page.goto("https://www.leafground.com/file.xhtml")


    //using fileChooser
     const downloadPromise= page.waitForEvent('download')
     await page.getByText("Download",{exact:true}).click()
     const download=await downloadPromise;
     await download.saveAs(download.suggestedFilename())
     
})*/