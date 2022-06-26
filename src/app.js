import '@babel/polyfill'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import Debug from 'debug'
const debug = Debug('API:app')
import validateTokensMiddleware from 'graphql/middleware/validateToken'
import initMiddleware from 'config/middleware'
import apolloServer from 'graphql'

// cors
import corsConfig from 'config/cors'
import initDatabase from 'config/database'

// main app
const app = express()

initMiddleware(app)
initDatabase()
app.use(cors(corsConfig))

app.use(cookieParser())
app.use(validateTokensMiddleware)

apolloServer(app)

app.listen(process.env.PORT || '3000', () =>
  debug(`Server running on port ${process.env.PORT || 3000}`)
)
