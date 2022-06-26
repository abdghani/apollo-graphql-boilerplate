# [Apollo Graphql Boilerplate](https://github.com/abdghani/apollo-graphql-boilerplate)


[![](https://img.shields.io/badge/author-@abdullah-blue.svg)](https://github.com/abdghani)


## A express-graphql boilerplate code with apollo server and mongoose. 

## Contents
- [Getting Started](docs/getting_started.md)

# Getting Started

>### Setting env and install dependencies
```bash
cp .env.sample .env
yarn global add nodemon
npm install
```

>### API Start
```bash
npm run dev
```

>### Docker compose
```bash
docker-compose up -d --build
```

>### ESlint Start
```bash
npm run lint:fix
```

# Modules
## Any standard module here comprises of :
- **mutation.js** : All mutation related to the module
- **query.js** : All query related to the module.
- **index.js** : Central place for all resolvers related to the module
- **util.js** (optional) : Helper funtions specific to that module

