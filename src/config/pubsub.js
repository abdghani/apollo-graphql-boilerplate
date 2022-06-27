const { RedisPubSub } = require('graphql-redis-subscriptions')
const Redis = require('ioredis')

let options = {
  host: process.env.REDIS_PUBSUB_HOST,
  port: process.env.REDIS_PUBSUB_PORT,
  password: process.env.REDIS_PUBSUB_PASSWORD
}

const pubsub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options)
})

const topics = {
  ENTITY_ADDED: 'ENTITY_ADDED',
  NEW_SOP: 'NEW_SOP'
}

module.exports = {
  pubsub,
  topics
}
