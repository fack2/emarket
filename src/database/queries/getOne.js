const dbconnection = require("../db_connection");
const getOneFlower = (id, cb) => {
    dbconnection.query("select name,arabicname,descrirtion,img from flower where id = $1", [id], (err, response) => {
        if (err) {
            console.log(err);
        } else {
            cb(null, response.rows);
        }
    });
};
module.exports = getOneFlower;