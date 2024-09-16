import { test } from "./customFixture"

//test.use({storageState:"loginCredentials.json"})
test.beforeEach(`Learning to use custom fixture`,async({loginFixture})=>{
    await loginFixture.locator('text=CRM/SFA').click()
   console.log(await loginFixture.title())
})

test('create Lead', async({loginFixture})=>{
    await loginFixture.locator('//a[text()="Create Lead"]').click()
    console.log(await loginFixture.title())
})

test('create accounts', async({loginFixture})=>{
    await loginFixture.locator('//a[text()="Create Account"]').click()
    loginFixture.waitForEvent("load")
    console.log(await loginFixture.title())
})

