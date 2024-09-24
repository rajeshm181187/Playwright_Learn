import {test, expect} from "@playwright/test"

test(`Screenshot compare`, async({page})=>{

await page.goto('https://www.danfoss.com');
await expect(page).toHaveScreenshot('./sample.png');
  
})