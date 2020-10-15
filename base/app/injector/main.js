// const electron = require('electron')
// const {app, BrowserWindow} = electron
// original source: An Intro To Electron - Desktop apps with Javascript https://www.youtube.com/watch?v=mr9Mtm_TRpw
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// // trying to share data between web pages
// global.sharedObject = {
//     someProperty: 'here is the value'
// }

// Initialize global reference to the window object
let win; 

function createWindow() {
    // Create browser window
    win = new BrowserWindow({width: 800, height: 600}); // icon

    // Load index.html
    win.loadURL(`file://${__dirname}/index.html`);
    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, 'site/app/index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }));

    //win.addListener('click')
    // Open devtools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });

}

app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    // Mac
    if(process.platform !== 'darwin') {
        app.quit();
    }
});
