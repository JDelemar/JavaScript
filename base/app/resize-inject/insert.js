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
    // just in case title is not found
    var htmlCollection = document.getElementsByTagName('title');
    var title = 'Title not found';
    if (htmlCollection.length > 0)
        title = htmlCollection[0].innerText;    
    return { title: title };
}
function runInSPWebView() {
    var results;

    results = _spPageContextInfo;
    return 'retrieved: ' + results.webAbsoluteUrl;
}