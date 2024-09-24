import test, { expect } from "@playwright/test"

test("verify videos", { tag: '@smoke' }, async ({browser}) => {
   // test.slow()
   const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 640, height: 480 },
    }
    
  });

    const page = await context.newPage();
    await page.goto('https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/page/home')
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator("#password").fill("Sales@123")
    await page.locator("#Login").click()
    await page.waitForLoadState('load')
    await page.getByTitle("App Launcher").click({ timeout: 5000 })
    await page.getByRole('button').getByText("View All").click()
    await page.getByPlaceholder("Search apps or items...").fill("Accounts")
    await page.locator('//mark').click()
    await page.locator('[title="New"][role="button"]').click()
    await page.locator('[name="Name"]').fill("Rajesh_Test")
    await page.locator('button[aria-label="Rating"]').click()
    await page.getByTitle('Warm').click()
    await page.locator('button[aria-label="Type"]').click()
    await page.getByTitle('Prospect').click()
    await page.locator('button[aria-label="Industry"]').click()
    await page.getByTitle('Banking').click()
    await page.locator('button[aria-label="Ownership"]').click()
    await page.getByTitle('Public').click()
    await page.locator('button[name="SaveEdit"]').click() 
})