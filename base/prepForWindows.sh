#!/bin/bash
# prepForWindows.sh
# Create symbolic links for Windows electron app
rm node_modules
ln -s $PWD/[windows]/node_modules $PWD/node_modules