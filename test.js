var mysql = require('mysql');

var con = mysql.createConnection({
  host: "test123.cv0m4q6akf8x.eu-north-1.rds.amazonaws.com",
  user: "Roaman19918",
  password: "Romanfrank007",
  database: "dbnameTest"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM People", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});