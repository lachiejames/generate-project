#!/usr/bin/bash
set timeout 360

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

# Create a temporary test directory
mkdir tempTestDir
cd tempTestDir

generate-project \
    --projectDir pwd
    --selectedTemplate "ts-library"
    --packageName "my-new-package"
    --packageDescription "Hot new JS framework" \
    --author "Open Sourcerer" 
