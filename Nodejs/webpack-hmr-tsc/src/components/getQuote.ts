import { resolve } from "url";
// import { Promise as promise } from 'es6-promise'; // didnt' fix IE error
// const promise = require('es6-promise').Promise; // still doesn't fix IE error

const request = require('request');

const getQouteFromSite = () => {
    var quote;

    // was getting an error in VSC IDE stating below, had to add "lib": [ "es6", "dom" ] to tsconfig.json
    // error: 'Promise' only refers to a type, but is behing used a value here
    // source: https://github.com/Microsoft/TypeScript/issues/14858
    // IE error: 'Promise' is undefined
    return new Promise<string>(function (resolve: any, reject: any) {
        request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function (error: any, response: any, body: any) {
            quote = body;
      
            resolve(quote);
            reject(error);
        });    
    });
};

async function main (): Promise<string> {
    const qoute = await getQouteFromSite();
    // console.log(qoute);
    return qoute;
}

export const getQoute = () => {
    return main();
    //const results = main();
};