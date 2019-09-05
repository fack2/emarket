const { Pool } = require('pg')

require('env2')('./config.env')

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('Set a DATABASE_URL env variable')
}

console.log(connectionString)
module.exports = new Pool({
  connectionString,
  ssl: !connectionString.includes('localhost')
})
