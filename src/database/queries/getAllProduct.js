// Add code below to query your database
const dbConnection = require('../db_connection')

const getProduct = () => {
    return dbConnection.query('SELECT * FROM product')
        .then(res => res.rows)
        .catch(err => err)
}
module.exports = getProduct