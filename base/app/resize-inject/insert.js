console.info('insert.js');

// get the ipcRenderer of electron
const {ipcRenderer} = require('electron');

// do something according to a request of your mainview
ipcRenderer.on('request', function() {
    ipcRenderer.sendToHost('request',runInWebView());
});

ipcRenderer.on('alert-webview', function(event, data){
    alert(data);
});

function runInWebView() {
    return { title: document.getElementsByTagName('title')[0].innerText };
}
function runInSPWebView() {
    var results;

    results = _spPageContextInfo;
    return 'retrieved: ' + results.webAbsoluteUrl;
}