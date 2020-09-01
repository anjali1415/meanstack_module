const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "DAC2020",
};

let addUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql =
        "INSERT INTO USER (USERNAME, PASS, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        input.username,
        input.password,
        input.email,
        input.mobile,
    ]);

    await connection.endAsync();
};

module.exports = { addUser };