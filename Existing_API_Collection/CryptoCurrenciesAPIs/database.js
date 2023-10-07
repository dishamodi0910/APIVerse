const mongoose = require('mongoose')


const dbConnect = connection(process.env.DB_URL, parseInt(process.env.DB_POOL_SIZE), 'internship')
function connection(DB_URL, maxPoolSize = 10, DB) {
    try {
      const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true, readPreference: 'secondaryPreferred' }
  
      const conn = mongoose.createConnection(DB_URL, dbConfig)
      conn.on('connected', () => console.log(`Connected to ${DB} database.`))
      return conn
    } catch (error) {
      handleCatchError(error)
    }
  }

  module.exports = {
    dbConnect
  }