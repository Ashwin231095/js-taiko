import { openBrowser,write, closeBrowser, step, goto, press, text, focus, textBox, toRightOf, beforeSuite, afterSuite } from "taiko";
import { ok } from "assert"

const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step("Goto getgauge github page", async () => {
    await goto('https://github.com/getgauge');
});

step("Search for <query>", async (query) => {
    await focus(textBox(toRightOf('Pricing')))
    await write(query);
    await press('Enter');
});

step("Page contains <content>", async (content) => {
    ok(await text(content).exists());
});


step('Navigate to <url>', async url =>
{
    await goto(url);
});
