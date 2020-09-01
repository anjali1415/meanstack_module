const Promise = require("bluebird");
const mysql = require("mysql");
const config = require("./config")

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();

let addrecordToDb = async () => {
    const Connection = mysql.createConnection(config.Db_config);
    await Connection.connectAsync();
    let sql = "INSERT INTO USER (ID,USERNAME,PASSWORD,EMAIL,MOB) values (?,?,?,?,?)";
    await Connection.queryAsync(sql, [3, "amit", "58587", "amit@123", "787573757"]);
    await Connection.endAsync()
}