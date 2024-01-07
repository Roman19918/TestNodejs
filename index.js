var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "TestDB"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO TestTabel (FirstName, LastName) VALUES ('Ольга', 'Янковська')";
  con.query("SELECT * FROM TestTabel", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});