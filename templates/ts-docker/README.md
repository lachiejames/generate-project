# {{ projectName }}

{{ projectDescription }}

## Local setup

Clone this project and open a terminal in the root directory.

### Yarn

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

### Docker

Build the docker image

```
docker build -t {{ projectName }} .
```

Run the docker image

```
docker run {{ projectName }}
```
