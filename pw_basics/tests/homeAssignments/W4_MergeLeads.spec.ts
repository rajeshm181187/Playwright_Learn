import { expect, test } from "@playwright/test";
import { log } from "node:console";
import { describe } from "node:test";

test.describe('This is merge lead', async () => {

    test.beforeEach("Merge leads login", async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.fill("#username", "demoSalesManager")
        await page.fill("#password", "crmsfa")
        await page.click(".decorativeSubmit")
        await page.locator('text=CRM/SFA').click()
    })

    test('Merge Lead', { tag: '@smoke' }, async ({ page, context }) => {
        test.slow()
        await page.locator('.frameSectionHeader').filter({ hasText: 'Leads' }).click()
        await page.locator('text=Merge Leads').filter({ hasText: 'Merge Leads' }).click()
        const newWindow1 = context.waitForEvent('page');
        await page.locator('[alt="Lookup"]').first().click()
        const newPage1 = await newWindow1;
        await newPage1.locator('.linktext').nth(10).click()
        const newWindow2 = context.waitForEvent('page');
        await page.locator('[alt="Lookup"]').last().click()
        const newPage2 = await newWindow2;
        await newPage2.locator('.linktext').nth(12).click()
        page.on('dialog', async dialog => {
            const alertMessage = dialog.message();
            console.log(`The message says ${alertMessage}`);
            const alertType = dialog.type();
            console.log(`The type of the alert is ${alertType}`);
            await dialog.accept("Testleaf");
        })
        await page.locator('.buttonDangerous').click({ delay: 2000 })

        //page.on('dialog', dialog => {console.log(dialog.type());dialog.accept()})    
        console.log(await page.title());
                
        expect((await page.title()).match('View Lead | opentaps CRM'))


    })

})
