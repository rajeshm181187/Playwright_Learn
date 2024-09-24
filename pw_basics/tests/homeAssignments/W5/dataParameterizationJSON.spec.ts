import test from "@playwright/test";
import path from "path";
import fs from "fs"
import testData from './testData.json';

//const testDataPath = path.join(__dirname, './data/testData.json');
//const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));

for (const user of testData) {
    test(`Get data from Json file ${user.TestCaseName}`, async ({ page }) => {
        await page.goto(user.url)
        await page.fill("#username", user.user)
        await page.fill("#password", user.password)
        await page.click(".decorativeSubmit")
        await page.locator('text=CRM/SFA').click()
        await page.getByRole('link', { name: 'Leads' }).click()
        await page.getByRole('link', { name: 'Create Lead' }).click()
        await page.fill('#createLeadForm_companyName', user.companyName)
        await page.fill('#createLeadForm_firstName', user.FirstName)
        await page.fill('#createLeadForm_lastName',user.LastName)
        await page.selectOption('#createLeadForm_dataSourceId', {label: user.Source})
        await page.selectOption('#createLeadForm_marketingCampaignId', {value: user.MarkCamp})     
        const listOfMarkCamp = await page.locator('select#createLeadForm_marketingCampaignId > option').all();
        console.log('Count of Marketing Campaign' ,listOfMarkCamp.length-1)
        listOfMarkCamp.forEach(async element => {
            console.log(await element.getAttribute('value'))
        });
        await page.selectOption('#createLeadForm_industryEnumId',{index: 6})
        await page.selectOption('#createLeadForm_generalCountryGeoId', {label: user.Country})       
        await page.selectOption('#createLeadForm_generalStateProvinceGeoId', {label: user.State})
        const listOfState = await page.locator('select#createLeadForm_generalStateProvinceGeoId > option').all();
        console.log('count of states:', listOfState.length-1)
        listOfState.forEach(async element => {
            console.log(await element.getAttribute('value'))
        });
        
    })
}