import {test, expect} from "@playwright/test";

/*

*/
test("Launch the browser", async ({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/");
    // Storing the page title here
    const title = await page.title();
    const url = await page.url();
    console.info("The url is "+url);
    console.info("The title is "+title);
    await page.locator("//input[@name='username']").fill("rajeshlearnings7");
    await page.locator("//input[@name='password']").fill("Rajeshlearnings7@");
    await page.getByRole('button', { name: 'Sign In' }).click();
    console.info("First test successful on login page");
})
