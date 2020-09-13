const puppeteer = require('puppeteer')

module.exports.scrapeText = async(url) =>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto(url);
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    return bodyHTML
};