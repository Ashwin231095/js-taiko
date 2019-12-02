/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, focus, $, click, reload, scrollTo } = require('taiko');
const headless = process.env.headless_chrome.toLowerCase() === 'true';
const { expect } = require('chai');

beforeSuite(async () => {
    await openBrowser({ headless: headless,args: [`--load-extension=../../../../../apty_assist_client_chrome`] }); //assist client to be placed in the pwd
});

afterSuite(async () => {
    await closeBrowser();
});

step("Goto <url>", async (url) => {
    await goto(url);
});

step("Enter <username> and <password>", async (username, password) => {
    await focus($('[id="ppm_login_username"]'));
    await write(username);
    await focus($('[id="ppm_login_password"]'));
    await write(password);
    await click($('[id="ppm_login_button"]'));
    await reload('http://111.93.27.187:8889');
    expect($('[class="ppm_workspace_title"]')).to.exist;
});

step("Display the content <content>", async (content) => {
    await click($('[class="letznav-banner-container__player"]'));
    await scrollTo($(`//div[@class="row-title"]//div//span[text()='${content}']`));
    await click($(`//div[@class="row-title"]//div//span[text()='${content}']`));
    expect($('[class="custom-content-overlay"]')).to.exist;
});
