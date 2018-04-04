// declare var System: any;

import './index.css'; // works
// require('./index.css'); // works
import './index.less';
import { numberFormatter } from './components/numberFormatter';
import { getQoute } from './components/getQuote';

// declare var module: any;
// if (module.hot) {
//     console.log('***why are we here?');
//     module.hot.accept();
// }

// need @types/node for below
if (process.env.NODE_ENV !== 'production') {
    require('file-loader!./index.html')
}

const qoute = getQoute();
qoute.then(x => {
    document.getElementById('outputAsynch').innerText = x;
});
console.log('numberFormatter(23666)',numberFormatter(23666));

let name = 'John Doe';
document.getElementById('outputTemplateStrings').innerText = `Output the generic name of ${name}`;
