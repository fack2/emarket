// Add code below to query your database
const dbConnection = require('../db_connection')

const checkUserEmail = (email) => {
    return dbConnection.query('SELECT * FROM "user" where  email = $1 ', [email])
        .then(res => res.rows)
        .catch(err => console.log(err))
}
const checkUserPassword = (password) => {
    return dbConnection.query('SELECT * FROM "user" where password = $1 ', [password])
        .then(res => res.rows)
        .catch(err => console.log(err))
}

module.exports = { checkUserEmail, checkUserPassword }