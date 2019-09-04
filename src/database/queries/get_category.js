const dbConnection = require('../db_connection')

const getCategory = () => dbConnection
  .query('select * from category')
  .then(res => res.rows)
  .catch(err => err)
module.exports = getCategory
