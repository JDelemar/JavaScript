#!/bin/bash
# prepForLinux.sh
# Create symbolic links for Linux electron app
rm node_modules
ln -s $PWD/[linux]/node_modules $PWD/node_modules