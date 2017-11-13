console.info('index.js');

let output = `
<h3>App Version Data</h3>
    <ul>
        <li>Node: ${process.versions.node}</li>
        <li>Chrome: ${process.versions.chrome}</li>
        <li>Electron: ${process.versions.electron}</li>
    </ul>
`;

document.getElementById('output').innerHTML = output;