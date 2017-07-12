'use strict';

// place chrome driver in environment PATH variable
var os = 'mac';
var webdriverPath = `webdriver/${os}`;
process.env.PATH = `${__dirname}/${webdriverPath}:${process.env.PATH}`;

// source: https://code.tutsplus.com/tutorials/an-introduction-to-webdriver-using-the-javascript-bindings--cms-21855
// var webdriver = require('selenium-webdriver');

// var browser = new webdriver.Builder()
//     .usingServer()
//     .withCapabilities({'browserName': 'chrome' })
//     .build();

// source: http://seleniumhq.github.io/selenium/docs/api/javascript/
const {Builder, By, wait} = require('selenium-webdriver');
var browser = new Builder()
    .usingServer()
    .withCapabilities({'browserName': 'chrome' })
    .build();


// browser.get('http://en.wikipedia.org/wiki/Wiki');

// browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
//     console.log('Found', links.length, 'Wiki links.' )
//     // browser.quit();
// });

// browser.findElement(By.name('search')).sendKeys('webdriver');
// browser.findElement(By.name('go')).click();

// var titleLookingFor = 'Selenium (software) - Wikipedia';

browser.get('https://www.google.com');
browser.findElement(By.name('q')).sendKeys('tuts+ code');
browser.findElement(By.name('btnG')).click();
browser.wait(findTutsPlusLink, 3000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);


function logTitle() {
    browser.getTitle().then(function(title) {
        console.log('Current Page Title: ' + title);
    });
}

function clickLink(link) {
    link.click();
}

function handleFailure(err) {
    console.error('Something went wrong\n', err.stack, '\n');
    closeBrowser();
}

function findSearchButton() {
    return browser.findElement(By.name('go'));
}
function findTutsPlusLink() {
    return browser.findElements(By.css('[href="https://code.tutsplus.com/"]')).then(function(result) {
        return result[0];
    });
}

function closeBrowser() {
    browser.quit();
}