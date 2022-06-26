import Debug from 'debug'
const debug = Debug('API:middleware')

import logger from 'morgan'
import cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import compression from 'compression'
// import helmet from 'helmet'
import dotenv from 'dotenv'

// const isDevelopment = process.env.NODE_ENV !== 'production'

const initMiddleware = app => {
  debug('Initializing middlewares')
  dotenv.config()

  /**
   * HTTP CORS and Security
   */
  // app.use(
  // 	helmet({
  // 		crossOriginEmbedderPolicy: !isDevelopment,
  // 		contentSecurityPolicy: !isDevelopment,
  // 	})
  // );

  /**
   * Express' default shitty response
   */
  app.disable('x-powered-by')

  /**
   * Compression for APIs
   */
  app.use(compression())

  /**
   * Logging using morgan
   * Note: Upgrade to Winston
   */
  app.use(logger('dev'))

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())

  debug('Finished initializing middlewares...')
}

module.exports = initMiddleware
