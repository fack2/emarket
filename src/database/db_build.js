const fs = require('fs')
const path = require('path')

const dbConnection = require('./db_connection')

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString()
const sql2 = fs.readFileSync(path.join(__dirname, 'init_value.sql')).toString()

const runDbBuild = (sql, cb) => dbConnection.query(sql, cb)

const cb = (err, res) => {
  if (err) {
    throw err
  }
  return res
}
runDbBuild(sql, cb)
runDbBuild(sql2, cb)

module.exports = runDbBuild
