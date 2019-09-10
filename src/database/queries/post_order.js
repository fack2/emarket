const dbConnection = require('../db_connection')

const postOrder = (name, address, phone, note) => {
  return dbConnection
    .query(
      'UPDATE "order" SET name=$1,address=$2,phone=$3,note=$4 WHERE ID=3',
      [name, address, phone, note]
    )
    .then(res => res.rows)

    .catch(err => err)
}
module.exports = postOrder
