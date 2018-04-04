import './app.scss'

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!./index.html')
}

console.log('Hello from app.js. Working successfully but getting an error about css.');
