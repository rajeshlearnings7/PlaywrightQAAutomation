import {test, expect} from "@playwright/test";

/*
Developer : @Rajesh Matadh
Purpose: This is the method helps in logging
*/
test("Launch the browser", async ({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/");
    await page.waitForTimeout(6000);
    // Storing the page title here
    const title = await page.title();
    const url = await page.url();
    console.info("The url is "+url);
    console.info("The title is "+title);
    await page.locator("//input[@name='username']").fill("rajeshlearnings7");
    await page.waitForTimeout(5000);
    await page.locator("//input[@name='password']").fill("Rajeshlearnings7@");
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(5000);
    console.info("First test successful on login page");
    
})
