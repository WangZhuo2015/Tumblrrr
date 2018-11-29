import * as puppeteer from 'puppeteer'

puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    let account = '1504002028@qq.com'
    let password = 'wang730000';

    await page.goto('https://www.tumblr.com/login');
    await page.screenshot({path: 'screenshot.png'});
    await page.type('#signup_determine_email',account);
    await page.screenshot({path: 'screenshot1.png'});
    await page.click('#signup_forms_submit');
    await page.waitFor(100);



    await browser.close();
});