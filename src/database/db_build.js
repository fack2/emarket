const fs = require('fs')
const path = require('path')

const dbConnection = require('./db_connection')

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString()
const sql2 = fs.readFileSync(path.join(__dirname, 'init_value.sql')).toString()

const runDbBuild = (sql, sql2) => {
  return dbConnection
    .query(sql)
    .then(res => {
      dbConnection.query(sql2).then(res => res)
    })
    .catch(err => err)
}

runDbBuild(sql, sql2)

module.exports = runDbBuild
