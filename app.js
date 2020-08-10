const express = require('express');
const routes = require('./routes')
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'mbmanager'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

// Routes
routes(app);

app.listen(port || port, () => console.log(`Application listening at :${port}`))

module.exports = app;