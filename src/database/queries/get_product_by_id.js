const dbConnection = require('../db_connection')

const getProductByID = id => {
  // dbConnection
  //   .query('Select id from cart where userID = $1 and orderID is null', [id])
  //   .then(res => {
  //     console.log(res.rows[0], '000')
  //     if (res) {
  //       dbConnection
  //         .query('Select * from "cartItem" where cartID = $1 and productID=$1 ', [id])
  //         .then(res => {
  //           if (res) {
  //             dbConnection
  //               .query('UPDATE "cartItem" SET quantity = $1, total = (select price from product where id = $2 ) WHERE id = $3', [res[0].quantity, id, res[0].id])
  //               .then(res => res)
  //           } else {
  //             dbConnection
  //               .query('INSERT INTO "cartItem" (cartID, quantity, productID) VALUES ($1, $2, $3);', [id, res[0].quantity, res[0].productid])
  //               .then(res => console.log)
  //           }
  //           else{
  //             dbConnection
  //               .query('INSERT INTO "cartItem" (cartID, quantity, productID) VALUES ($1, $2, $3);', [id, res[0].quantity, res[0].productid])
  //               .then(res => console.log)
  //           }
  //           console.log(res.rows, '77777777777')
  //         })
  //     }
  //   })
  //   .catch(err => console.log(err, '0222222222222222'))
  return dbConnection
    .query('Select * from product where id = $1', [id])
    .then(res => res.rows)
    .catch(err => err)
}

module.exports = getProductByID
