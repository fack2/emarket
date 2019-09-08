// Add code below to query your database
const dbConnection = require('../db_connection')

const getcategoryProducts = (id) => {
    return dbConnection.query('SELECT * FROM product where categoryid= $1', [id])
        .then(res => res.rows)
        .catch(err => err)
}
module.exports = getcategoryProducts