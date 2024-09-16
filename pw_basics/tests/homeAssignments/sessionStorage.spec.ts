import test from "@playwright/test";

test.skip('Storage state for leaftaps', async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.fill("#username", "demoSalesManager")
    await page.fill("#password", "crmsfa")
    await page.click(".decorativeSubmit")
    await page.context().storageState({path: './storingState.json'})
})


test.use({storageState: "./storingState.json"})
test('use storage state', async({page})=>{
    
    await page.goto('http://leaftaps.com/opentaps/control/login')
    await page.locator('text=CRM/SFA').click()

})