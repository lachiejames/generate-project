# @lachiejames/generate-project

[![npm version](https://badge.fury.io/js/@lachiejames%2Fgenerate-project.svg)](https://badge.fury.io/js/@lachiejames%2Fgenerate-project)
[![test pipeline](https://github.com/lachiejames/generate-project/actions/workflows/test.yml/badge.svg)](https://github.com/lachiejames/generate-project/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/lachiejames/generate-project/branch/main/graph/badge.svg?token=L039OS3ULI)](https://codecov.io/gh/lachiejames/generate-project)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

An interactive command-line tool to quickly setup new TypeScript projects. This includes installing the required dependencies and adding configuration files.

## Requirements

This tool requires the following to be installed:

- Node (v18+ to ensure compatibility with the latest versions of the installed packages)
- Yarn
- Git

## Usage

1. Install this package globally:

```
npm install -g @lachiejames/generate-project
```

2. Navigate to the directory in which you want to create the new project (e.g. ~/Desktop):

3. Then start the interactive setup:

```
generate-project
```

## Demo

TODO: add demo

## Development

Clone this project and open a terminal in the root directory.

Install dependencies:

```
yarn install
```

Build the project:

```
yarn build
```

Run unit tests:

```
yarn test
```

Run the project:

```
yarn start
```

Install code globally as an npm package then execute E2E tests:

```
bash ./e2e/preTest.sh; yarn e2etest;
```
