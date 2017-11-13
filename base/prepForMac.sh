#!/bin/bash
# prepForMac.sh
# Create symbolic links for Mac electron app
rm node_modules
ln -s $PWD/[mac]/node_modules $PWD/node_modules