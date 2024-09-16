import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend({
    driver: async ({ page }, use) => {
        await page.goto('https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/page/home')
        await page.locator("#username").fill("vidyar@testleaf.com")
        await page.locator("#password").fill("Sales@123")
        await page.locator("#Login").click()
        await use(page);
       
    }
});



