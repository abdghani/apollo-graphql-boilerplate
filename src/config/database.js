import Debug from 'debug'
const debug = Debug('API:database')
import mongoose from 'mongoose'

const initDatabase = () => {
  debug('Initializing database connection...')

  /**
   * MongoDB Connection URI
   */
  let dbUri = process.env.DB_DEV_URI
  if (process.env.NODE_ENV === 'production') {
    dbUri = process.env.DB_PROD_URI
  }
  let options = {
    autoIndex: false,
    useNewUrlParser: true,
    replicaSet: 'Cluster0-shard-0'
  }

  /**
   * For indexing issues on MongoDB Atlas
   * Note: manual index setup is needed
   */
  // mongoose.set('useCreateIndex', true);

  // This enables us to use methods like findOneAndUpdate
  // mongoose.set('useFindAndModify', false);
  // mongoose.set('useUnifiedTopology', true);

  /**
   * Start MongoDB Connection
   */
  const dbType = dbUri.includes('mongodb+srv') ? 'Remote' : 'Local'
  mongoose.connect(dbUri, options, err => {
    if (err) debug(`Connection error: ${err}`)
    else debug(`${dbType} Database conected`)
  })
}

module.exports = initDatabase
