// const mysql      = require('mysql');  //->  v8 - node
// import mysql from "mysql"; //->  v14 - node
export const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
conn.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + conn.threadId);
});

// export const conn = "helloooooo"
// module.exports = {conn};