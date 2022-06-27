# [Express Apollo Graphql](https://github.com/abdghani/apollo-graphql-boilerplate)


[![](https://img.shields.io/badge/author-@abdullah-blue.svg)](https://github.com/abdghani)


## A apollo-express-graphql boilerplate with apollo server and mongoose and support for subscription



# Getting Started

>### Install Redis
_Mac (using [homebrew](http://brew.sh/)):_
```bash
brew install redis
```
_Linux:_
```bash
sudo apt-get install redis-server
```

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
- **subscription.js** : All subscriptions related to the module.
- **index.js** : Central place for all resolvers related to the module
- **util.js** (optional) : Helper funtions specific to that module

