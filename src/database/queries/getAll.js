const dbconnection = require("../db_connection");
const getData = cb => {
  dbconnection.query("select id,name,img from flower", (err, response) => {
    if (err) {
      console.log(err);
    } else {
      cb(null, response.rows);
    }
  });
};
module.exports = getData;