// Add code below to query your database
const dbConnection = require('../db_connection')

const getSearchedProducts = (id, input) => {
    if (id === 'undefined') {
        return dbConnection.query('SELECT * FROM product where  name ILIKE $1 ', ['%' + input + '%'])
            .then(res => res.rows)
            .catch(err => console.log(err))
    } else {
        return dbConnection.query('SELECT * FROM product where categoryid = $1 AND name ILIKE $2 ', [id, '%' + input + '%'])
            .then(res => res.rows)
            .catch(err => console.log(err))
    }
}
module.exports = getSearchedProducts