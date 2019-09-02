const fs = require('fs');

const dbConnection = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
const sql2 = fs.readFileSync(`${__dirname}/initValue.sql`).toString();

const runDbBuild = (cb) => dbConnection.query(sql, cb);

const runDbBuild2 = (cb) => dbConnection.query(sql2, cb);

runDbBuild((err, res) => {
  if (err) {
    throw err;
  }
  return res;
});
runDbBuild2((err, res) => {
  if (err) {
    throw err;
  }
  return res;
});

module.exports = {runDbBuild, runDbBuild2};
