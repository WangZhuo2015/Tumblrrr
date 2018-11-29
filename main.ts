// @ts-ignore
import * as puppeteer from 'puppeteer'

puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    let account = '1504002028@qq.com';
    let password = 'wang730000';
    page.setUserAgent ("Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1");
    await page.goto('https://www.tumblr.com/login');
    await page.screenshot({path: 'screenshot.png'});
    await page.type('#signup_determine_email',account);
    await page.screenshot({path: 'screenshot1.png'});
    await page.click('#signup_forms_submit');
    await page.waitFor(2000);
    await page.screenshot({path: 'screenshot2.png'});
    // await page.click('#signup_login_button');
    await page.click('#signup_magiclink > div.magiclink_password_container.chrome');
    await page.waitFor(2000);
    await page.type('#signup_password',password);
    await page.click('#signup_forms_submit');
    await page.screenshot({path: 'screenshot3.png'});
    await page.waitForNavigation();
    await page.screenshot({path: 'screenshot4.png'});

    await browser.close();
});