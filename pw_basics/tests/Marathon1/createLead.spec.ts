import test, { expect } from "@playwright/test";

test('playwright locator with salesforce', async({page})=>{   

    await page.goto("https://login.salesforce.com/")   

    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator("#password").fill("Sales@123")
     await page.locator("#Login").click()
     await page.getByTitle("App Launcher").click({timeout:12000})   
     await page.getByText("View All").click()
     await page.getByPlaceholder("Search apps or items...").fill("Marketing")
     await page.getByRole("link",{name:"Marketing CRM Classic",exact:true}).click();
     //await page.waitForTimeout(5000)
     await page.locator('[title="Leads"]').click()
     await page.getByRole("button").filter().locator('[title="New"]').click()
    await page.locator('//div[@data-aura-class="lafPageHost"]//child::div[@data-aura-class="oneRecordActionWrapper"]').isVisible()
    
    
     await page.locator('//lightning-picklist[@data-field="salutation"]//child::button').first().click()
     await page.locator('[title="Mr."]').click()
     await page.getByPlaceholder('First Name').fill("FRajesh")
     await page.getByPlaceholder('Last Name').fill("LMani")
     await page.locator('[name="Company"]').fill("danf")
     await page.locator('[title="Save"][type="button"]').click()
     await page.waitForSelector('[data-key="success"][data-aura-class="forceToastMessage"]')
     await page.locator('[data-key="success"][data-aura-class="forceToastMessage"]').isVisible()
     await page.locator('//*[@title="Submit for Approval"]//following::*[@part="button button-icon"]').first().click()
     await page.getByText('Convert').click()
     await page.locator('(//span[text()="Opportunity Name"]//parent::label)//following-sibling::input').first().click()
     await page.locator('(//span[text()="Opportunity Name"]//parent::label)//following-sibling::input').first().fill("New updated one")
     expect(await page.locator("//*[contains(@data-aura-class,'leadConvertedConfirmation')]//h2").innerText()).toContain("Your lead has been converted")

/*     await page.locator('[title="New Account"]').click()
     
     await page.locator('//div[@role="dialog"]//child::div[@class="modal-container slds-modal__container"]').last().isVisible()
     await page.locator('//span[text()="Account Name"]//following::input[@type="text"][@aria-required="true"]').fill("ARajesh")
     await page.locator('//span[text()="Account Number"]//following::input[@type="text"]').first().fill("123456")
     await page.locator('[role="combobox"][tabindex="0"]').first().click()
     await page.locator('[title="Hot"]').click()
     await page.locator('[title="Save"][type="button"]').click()
     await page.waitForSelector('[data-key="success"][data-aura-class="forceToastMessage"]')
     await page.locator('[data-key="success"][data-aura-class="forceToastMessage"]').isVisible()
     await page.locator('[aria-label="Status"][type="button"]').click()
     await page.locator('//span[@title="New"]').click({timeout: 2000})

     await page.locator('[aria-label="Priority"][type="button"]').click()
     await page.locator('//span[@title="High"]').click()

     await page.locator('[aria-label="Case Origin"][type="button"]').click()
     await page.waitForLoadState("load")
     await page.locator('//span[@title="Email"]').click()

     await page.locator('[name="Subject"]').fill("Product Return Request")
     await page.locator('[part="textarea"]').first().fill('Requesting a return for a defective product')

     await page.locator('[name="SaveEdit"]').click()
     await page.waitForSelector('[data-key="success"][data-aura-class="forceToastMessage"]')
     await page.locator('[data-key="success"][data-aura-class="forceToastMessage"]').isVisible()
     await page.locator('[title="Details"]').isVisible()

     await page.locator('[title="Edit Status"]').click()
     await page.locator('[data-value="New"]').click()    
     await page.locator('[data-value="Escalated"]').click()     


    await page.locator('[name="SaveEdit"]').click()

    
    const updatedStatus = await page.locator('//span[@class="test-id__field-label"][text()="Status"]//following::lightning-formatted-text[@slot="outputField"]').first().innerText();
    expect(updatedStatus).toContain("Escalated")
    await page.waitForSelector('[title="Share an update..."]')
    await page.locator('[title="Share an update..."]').last().click()
    await page.locator('[data-placeholder="Share an update..."]').last().fill("updated content")
    await page.locator('[title="Click, or press Ctrl+Enter"]').click()
    expect(await page.locator('//span[@class="uiOutputText"][@dir="ltr"]').innerText()).toContain("updated content")
    await page.locator('//*[contains(@class,"slds-button slds-button_icon-border slds-button_icon-x-small")]').first().click()
    await page.locator('[title="Like on Chatter"]').click()
    await page.waitForSelector('[data-key="success"][data-aura-class="forceToastMessage"]')
     await page.locator('[data-key="success"][data-aura-class="forceToastMessage"]').isVisible()
     await page.locator('[title="Chatter"]').click()
     const likedUpdate = await page.locator('//div[@class="cuf-body"]//span[@class="uiOutputText"][@dir="ltr"]').nth(2).innerText();
     expect(likedUpdate).toContain("Updated")*/



    



     /*await page.getByTitle('Accounts').filter({hasText: 'Accounts'}).click()
     await page.waitForTimeout(5000)
     await page.locator('.forceActionLink').first().click()
*/
})
