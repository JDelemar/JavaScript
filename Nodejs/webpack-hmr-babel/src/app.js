import './app.scss'
const request = require('request');

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!./index.html')
}

var getQuote = function getQuote () {
  var quote;

  return new Promise(function (resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function (error, response, body) {
      quote = body;

      resolve(quote);
      reject(error);
    });
  });
}

async function main () {
  var quote = await getQuote();
  console.log(quote);
}

main();
console.log('Hello from app.js. Working successfully but getting an error about css.');
