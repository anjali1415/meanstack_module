const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
let config = require("./config");
// add data into db
let addrecord = async (input) => {
    let connection = mysql.createConnection(config.Db_config);
    await connection.connectAsync();
    let sql = "INSERT INTO newuser (ID,FNAME,LNAME,MOB) VALUES(?,?,?,?)";
    let res = connection.queryAsync(sql, [
        input.id,
        input.fname,
        input.lname,
        input.mob,
    ])
    await connection.endAsync();
    console.log(res);
    //return;
}
module.exports = { addrecord };