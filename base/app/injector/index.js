console.info('index.js');
var $webview = $('webview');
var webviewResult;
if ($webview.length === 1) {
    $webview[0].src = 'https://<sharepoint or some other site>';
    //$webview[0].preload = './insert.js';
    $webview[0].addEventListener('dom-ready', () => {
        
        // type 2 code works
        // source: https://ourcodeworld.com/articles/read/201/how-to-send-retrieve-information-and-manipulate-the-dom-from-a-webview-with-electron-framework
        console.log('DOM-Ready, triggering event');
        $webview[0].send('request');
        $webview[0].send('alert-webview', 'Alerting from the webview');

        // // type 1 code works
        // var script = `
        //     var result = _spPageContextInfo;
        //     alert('Got the info');
        //     Promise.resolve(result);
        // `;
        // $webview[0].getWebContents().executeJavaScript(script)
        //     .then((result) => { console.log(result); webviewResult = result; })
        //     .catch((error) => console.log(error));
        // // $webview[0].executeJavaScript('alert("_spPageContextInfo" + JSON.stringify(_spPageContextInfo))');
    });
    // also with type 2...and the insert.js too
    // process the data from the webview
    $webview[0].addEventListener('ipc-message', function(event) {
        console.log('event:',event);
        console.info('event.channel:',event.channel);
    });
}

// // below works in the console after dom ready
// var siteUrl = 'https://<sharepoint or some other site>';
// var pageContextInfoExists = typeof _spPageContextInfo !== 'undefined' ? true:false;
// var listName = 'Demo List';
// var spClientContext = pageContextInfoExists ? new SP.ClientContext():new SP.ClientContext(siteUrl);
// var spList = spClientContext.get_web().get_lists().getByTitle(listName);
// spClientContext.load(spList);
// spClientContext.executeQueryAsync(
//     function() {
//         console.info('Success', spList);
//     },
//     function(sender, error) {
//         console.warn('Error', error);
//     }
// );