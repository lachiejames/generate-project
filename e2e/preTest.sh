#!/usr/bin/bash

# Ensure global install is clean
npm uninstall -g @lachiejames/generate-project
rm -rf *.tgz
# Ensure temporary test directory is clean
rm -rf tempTestDir

# Install and build the project
yarn install
yarn build

# Install the project globally
npm pack
npm install -g *.tgz
