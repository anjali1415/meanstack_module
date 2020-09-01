const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
let config = require("./config");
let readrecords = async () => {
    const connection = mysql.createConnection(config.Db_config);
    await connection.connectAsync();
    let sql = "select *from newuser";
    let res = await connection.queryAsync(sql);

    await connection.endAsync();
    return res;
}

module.exports = { readrecords }


