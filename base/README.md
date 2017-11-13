# Electron Base App
Base app for testing electron apps

## Specifications
Node: 7.9.0
Chrome: 58.0.3029.110
Electron: 1.7.9

### Start
Base App `npm start`
Other Apps `npm run other-app-name`

#### Notes
Generating the files  
- Windows
- Mac
- Linux
Create a sybmolic link for OS (Mac/Linux): `prepForWindows.sh`, `prepForMac.sh`, or `prepForLinux.sh`  
Run node from docker container `docker run --rm -it -p 3000:3000 -v $PWD:/app --name node node:8.9.0-alpine /bin/sh`  
If you install electron globally you wouldn't have to worry about it being in the node_modules directory but you wouldn't be able to use different versions on different applications  

##### TODO
Script to create symbolic link for Windows - .bat  
What can you do with this: `var win1 = window.open('https://www.google.com')` - opens google in a new window. Google disallows running in iFrame. Can I communicate with the new window?  