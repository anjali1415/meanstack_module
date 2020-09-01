const Promise = require("bluebird");
const mysql = require("mysql");

// Promisify the mysql
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_conf = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "DBdemo",
};

let hellodb = async () => {
    const connection = mysql.createConnection(db_conf);

    // connection open

    await connection.connectAsync();//promise
    let sql = "SELECT *FROM USER";
    let result = await connection.queryAsync(sql);
    await connection.end();
    console.log(result);
};
//hellodb();

let hellodb1 = async () => {
    const connection = mysql.createConnection(db_conf);

    // connection open

    await connection.connectAsync();//promise
    let sql = "SELECT *FROM USER WHeRE ID=2";
    let result = await connection.queryAsync(sql);
    await connection.end();
    console.log(result);
    console.log(result[0].password);
};
//hellodb1();

let hellodb2 = async () => {
    const connection = mysql.createConnection(db_conf);

    // connection open

    await connection.connectAsync();//promise
    let sql = "SELECT id,email FROM USER where id=? AND email=? ";
    let result = await connection.queryAsync(sql, [2, "tush@123"]);
    await connection.end();
    console.log(result);
};
//hellodb2();

let hellodb3 = async () => {
    const connection = mysql.createConnection(db_conf);

    // connection open

    await connection.connectAsync();//promise
    let sql = "SELECT id as alice FROM USER ";
    let result = await connection.queryAsync(sql);
    await connection.end();
    console.log(result);
};
hellodb3();
