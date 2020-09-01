const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let funaddrecord = async (input) => {
    const connection = mysql.createConnection(config.Db_config);
    await connection.connectAsync();
    let sql = "INSERT INTO USER (ID,USERNAME,PASSWORD,EMAIL,MOB) values (?,?,?,?,?)";
    await Connection.queryAsync(sql, [
        input.id,
        input.username,
        input.password,
        input.email,
        input.mob

    ]);
    await Connection.endAsync();
    //console.log(res);
    return;
};
module.exports = { funaddrecord }
//funaddrecord();