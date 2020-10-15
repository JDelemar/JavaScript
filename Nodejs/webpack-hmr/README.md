# Webpack Hot Module Replacement
Use Webpack to hot reload source code  
Original source from Ihatetomatoes [YouTube](https://www.youtube.com/watch?v=JdGnYNtuEtE&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY) and [GitHub](https://github.com/Ihatetomatoes/webpack-101-hmr-css)

## TODO
Use angular
Use less instead of scss
Test with older versions of IE - especially using ES2015
Try using ES2015 specific commands
Add pictures
Try updting modules

## Configuartion
webpack
babel (for ES2015)

## Starting from scratch
1. Create project, accepting npm defaults are fine
```bash
mkdir myproject
cd myproject
npm init 
```
2. Install dev dependencies with yarn or npm
```bash
yarn add webpack --dev #or npm i -D webpack
```
3. Create distribution folder `mkdir dist` (Optionally create .vscode/settings.json to exclude `node_modules` folder)

## Using source files to start from scratch
1. Create project, accepting npm defaults are fine
```bash
mkdir myproject
cd myproject
npm init 
```
2. Copy `devDependencies` from original project then install `yarn` or `npm install`
From here you can bundle your files with
```bash
node_modules/.bin/webpack ./src/app.js ./dist/app.bundle.js
# OR to minify
node_modules/.bin/webpack ./src/app.js ./dist/app.bundle.min.js -p
```


Altered package.json
```json
# removed
    "babel-preset-react": "^6.22.0",

    "eslint-config-standard-react": "^4.3.0",
    "eslint-plugin-react": "^6.10.3",

    "pug": "^2.0.0-beta3",
    "pug-html-loader": "^1.1.0",
    "pug-loader": "^2.3.0",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "rimraf": "^2.6.0",
# changed - didn't work
    from
        "dev": "npm run lint && webpack-dev-server",
    to
        "dev": "npm run lint && webpack-dev-server --open --inline --hot",
```

To get html hot reload working
- Added yarn add file-loader@0.10.0 --dev
- Added the following to app.js
```javascript
if (process.env.NODE_ENV !== 'production') {
  require('file-loader!./index.html')
}
```

Changed original .eslintrc.json to disable the semicolon rule (https://stackoverflow.com/questions/40453894/allow-semi-colons-in-javascript-eslint)
```json
# from
 "extends": ["standard", "standard-react"]
# to
    "extends": "standard",
    "rules": {
        "semi": 0
    }
```

Changed .babelrc
```json
# from
    "presets": ["es2015", "react"]
# to
    "presets": ["es2015"]
```