console.info('index.js');
var $webview = $('webview');
var webviewResult;
if ($webview.length === 1) {
    $webview[0].src = 'https://<sharepoint site>';
    $webview[0].addEventListener('dom-ready', () => {
        var script = `
            var result = _spPageContextInfo;
            alert('Got the info');
            Promise.resolve(result);
        `;
        $webview[0].getWebContents().executeJavaScript(script)
            .then((result) => { console.log(result); webviewResult = result; })
            .catch((error) => console.log(error));
        // $webview[0].executeJavaScript('alert("_spPageContextInfo" + JSON.stringify(_spPageContextInfo))');
    });
}