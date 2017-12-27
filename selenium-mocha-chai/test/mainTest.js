const assert = require('chai').assert;
const {Builder, By, wait, Key, until} = require('selenium-webdriver');
const main = require('../main');

describe('main acceptance tests', function() {
    describe('sayHello()', function() {
        let sayHelloResult = main.sayHello();
        // it('should have tests');
        it('should return type string', function() {
            assert.typeOf(sayHelloResult, 'string');
        });
        it('should return Hello', function() {
            assert.equal(sayHelloResult, 'Hello');
        });
    });
    let val1 = 25;
    let val2 = 17;
    describe('addNumbers(' + val1 + ',' + val2 + ')', function() {
        let addNumbersResult = main.addNumbers(val1, val2);
        // it('should have tests');
        it('should return type number', function() {
            assert.typeOf(addNumbersResult, 'number');
        });
        it('should equal sum of numbers', function() {
            assert.equal(addNumbersResult, val1 + val2);
        });
    });
});

const aryBrowsers = ['firefox', 'chrome', 'internet explorer'];
// const aryBrowsers = ['firefox'];
aryBrowsers.forEach(function(browserName) {
    // console.log(v);

    //*//
    describe('WebApp acceptance tests - ' + browserName, async function() {
        var TIMEOUT = 5000;
        this.timeout(3 * TIMEOUT); // remove "before all" hook: Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
        let browser;

        before(async function() {
            browser = new Builder()
            .usingServer('http://192.168.1.118:4444/wd/hub')
            // .withCapabilities({'browserName': 'firefox'})
            // .withCapabilities({'browserName': 'chrome'})
            // .withCapabilities({'browserName': 'internet explorer'})
            .withCapabilities({'browserName': browserName})
            .build();
            await browser.get('https://www.google.com');
        });
        // it('tests should go here');
        it('loads home page', async function() {
            const title = await browser.getTitle();
            assert.strictEqual(title, 'Google', 'Title should match');
        });
        it('searches for a term', async function() {
            const newTitle = 'selenium - Google Search';
            await browser.findElement(By.name('q')).sendKeys('selenium', Key.ENTER);
            await browser.wait(until.titleIs(newTitle), TIMEOUT);
            const title = await browser.getTitle();
            // console.log('title: ', title);
            assert.strictEqual(title, newTitle, 'Title should match');        
        });
        after(async function() {
            await browser.quit();
        });
    });
    //*/

});
