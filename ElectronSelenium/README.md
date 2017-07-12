# Selenium Electron App

This is an Electron app with Selenium

This app allows you to use selenium in the developer tools console so you can fine tune your browser automation scripts

The application does the following
1. Open Chrome to Google
2. Enters `tuts+ code` in the search box
3. Clicks the search button
4. Attempts to find https://code.tutsplus.com within 2 seconds
5. Clicks the above link (if found)
6. Closes the browser after 2 seconds and outputs the page title or an error message (if link not found)

After the application finishes you use code in `index.js` in the dev tools console like below to fine tune browser automation scripts
```javascript
var browser = new Builder()
    .usingServer()
    .withCapabilities({'browserName': 'chrome' })
    .build();

browser.get('http://en.wikipedia.org/wiki/Wiki');
browser.findElement(By.name('search')).sendKeys('webdriver');
browser.findElement(By.name('go')).click();
```

This app was tested on Mac OS Sierra

### Setup
    node 6.11.0
    electron 1.6.11
    selenium-webdriver 3.4.0
    chromedriver 2.30 (for Chrome v58-60)
    Chrome 59.0.3071.115

### Requirements
    node 6.11.0
    Chrome v58-60

