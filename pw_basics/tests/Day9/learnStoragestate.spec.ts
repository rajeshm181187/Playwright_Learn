import test from "@playwright/test";

test('learn storage state', async({page})=>{
await page.goto("https://www.danfoss.com/en/");
    await page.context().storageState({path: '../../storingState.json'})
    
})