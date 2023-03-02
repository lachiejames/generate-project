#!/usr/bin/bash

projectName="my-new-package"
projectDir="./tempTestDir"

# Cleanup
docker rmi $projectName
npm uninstall -g @lachiejames/generate-project
rm -rf *.tgz
rm -rf $tempTestDir

# Install and build the project
yarn install
yarn build

# Install the project globally
npm pack
npm install -g *.tgz
