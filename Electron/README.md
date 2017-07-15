# Electron App

This is a simple Nodejs Electron app that runs and prints some basic version information

Preparation - install modules by typing `npm install` or `yarn`

To start, type `npm start`

This app was tested on Mac OS Sierra

## Creating this project from scratch
In a terminal window, enter the following
```bash
mkdir my-shiny-new-project
cd my-shiny-new-project
npm init # or yarn init
# then follow the prompts - accepting defaults should be OK
npm install electron --save-dev # or yarn add electron --dev
touch index.js index.html
# put some things in those files (like the things that are in this project)
```
Add the folling to the `package.json` file
```json
    "scripts": {
        "start": "electron ."
    }
```
Then run the project with `npm start`

### Requirements
    node 6.11.0
