# Notes

### Scratch pad
```javascript
// tsconfig.json
    // look into the following compilerOptions
        "noEmitOnError": true,
        "noImplicitAny": true,
        "experimentalDecorators": true,
        "sourceMap": false,
        "inlineSourceMap": true,
        "declaration": true,
// package.json
    // added
        "webpack-cli": "^2.0.10" // to run webpack from the command line
        "file-loader": "^1.1.11", // to try to load html with sources
        "html-webpack-plugin": "^3.0.4", // to append a unique hash for scripts, useful for cache busting
        // for testing - source: https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2
        // source contains additional information like excluding style sheets, 
            // packages yarn add chai mocha ts-node @types/chai @types/mocha -D
                "@types/chai": "^4.1.2",
                "@types/mocha": "^2.2.48",
                "chai": "^4.1.2",
                "mocha": "^5.0.1",
                "ts-node": "^5.0.1",
            // removed script
                "test": "echo \"Error: no test specified\" && exit 1",
    // was getting errors after modifying files - older version resolved those errors
        /*
            webpack-hmr-tsc/node_modules/awesome-typescript-loader/src/instance.ts:73
            if (!compiler._tsInstances) {
                        ^
            TypeError: Cannot read property '_tsInstances' of undefined
        */
        // removed newer version of webpack (packages below)
            "html-webpack-plugin": "^3.0.4",
            "webpack": "^4.1.0",
            "webpack-cli": "^2.0.10",
            "webpack-dev-server": "^3.1.0"
// tsconfig.json
    // had a issue with Promise - didn't work
        // change from 
        "lib": [ "es6", "dom" ] // this only stops errors in IDE
        // to
        "lib": [ "dom", "es2015.promise", "es5" ]
        // used a shim for IE to use Promise (es6) - almost had to use an npm package but it worked without it es6-promise
        <script src="https://cdn.jsdeliver.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
        <script src="https://cdn.jsdeliver.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>        
```
To get html hot reload working
- Added yarn add file-loader@0.10.0 --dev
- For typescript, had to add @types/node@8.9.1 (version of node currently using)
- Added the following to index.js
```javascript
if (process.env.NODE_ENV !== 'production') {
  require('file-loader!./index.html')
}
```

### Issues 
favicon.ico not found