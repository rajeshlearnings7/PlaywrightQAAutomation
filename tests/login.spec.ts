import {test, expect} from "@playwright/test";

test("Launch the browser", async ({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/");
    await page.locator("//input[@name='username']").fill("rajeshlearnings7");
    await page.locator("//input[@name='password']").fill("Rajeshlearnings7@");
    await page.getByRole('button', { name: 'Sign In' }).click();
    console.info("First test successful");
})
