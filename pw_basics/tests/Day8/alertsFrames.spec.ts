
import test, { expect } from "@playwright/test";

test.only('alers and frames', async({page})=>{ 
    
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    await page.waitForLoadState("load")
    //await page.waitForTimeout(5000)
    page.on('dialog', dialog => dialog.accept());
 
    const allFrames = page.frames()
   console.log( allFrames.length);
   
    for (const element of allFrames) {
        console.log("Number of inner frame in this frame", element.childFrames.length)
        
    }
    /*
   const innerFrame = page.frameLocator('#iframeResult')
    await innerFrame.locator('text=Try it').click()
    await page.waitForLoadState("load")
    console.log(await innerFrame.locator('#demo').innerText())
console.log(allFrames)*/
})

