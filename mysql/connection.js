const mysql = require('mysql2');
console.log("Connect mysql...");



var connection = mysql.createConnection({
    host: "localhost",
    user: "aagadullin",
    database: "database_test",
    password: "Master_vini2690",
    insecureAuth: true
})


const database = {

      insert : (arr) => {
                      var sql = 'INSERT INTO table_test(login, password) VALUES(?,?)';
                      connection.query(sql, arr, (err, result) => {
                      if (err) console.log(err);
                      console.log(result);
                      })
      }
};

module.exports = database;