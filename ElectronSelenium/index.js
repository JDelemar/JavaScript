'use strict';

// source: http://seleniumhq.github.io/selenium/docs/api/javascript/
const {Builder, By, Key, wait, until} = require('selenium-webdriver');
var browser = new Builder()
    .usingServer('http://192.168.1.118:4444/wd/hub')
    .withCapabilities({'browserName': 'chrome' })
    // .withCapabilities({'browserName': 'firefox'})
    // .withCapabilities({'browserName': 'internet explorer'})
    .build();

var TIMEOUT = 5000;

(async function() {
    await browser.get('https://www.google.com');
    let currentTitle = await browser.getTitle();
    console.info('Current title: ' + currentTitle);
    await browser.findElement(By.name('q')).sendKeys('selenium', Key.ENTER);
    await browser.wait(until.titleIs('selenium - Google Search'), TIMEOUT);
    currentTitle = await browser.getTitle();
    console.info('Current title: ' + currentTitle);
    await browser.quit();
})()
