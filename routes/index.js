var express = require('express');
var router = express.Router();
const db = require('../models/index');

router.get('/getempdata', function(req, res, next) {

  if(req.query.empid){
    db.sequelize.query(`SELECT * FROM employee_data WHERE empid = ${req.query.empid}`).then(data => {
      res.status(200).json(data);
    })
  } else {
  db.sequelize.query('SELECT * FROM employee_data').then(data => {
    res.status(200).json(data);
  })
}
});

router.post('/delemp', function (req , res , next) {
  db.sequelize.query('DELETE FROM employee_data WHERE empid='+ req.body.empid+';').then( data => {
    res.status(200).json('success');
  })
})

router.post('/sort' , function ( req, res, next ) {
  db.sequelize.query(`SELECT * FROM employee_data ORDER BY ${req.body.sorttype} ASC;`).then( data => {
    res.status(200).json(data);
  }).catch ( err => {
    res.status(500).json(err)
  })
});

router.post('/addemp' , function (req, res, next) {
  db.sequelize.query(`INSERT INTO employee_data ( firstname , lastname , address , dob , mobile , city) values ("`+req.body.fname+`" , "`+req.body.lname+`" , "`+req.body.address+`" , STR_TO_DATE("`+req.body.dob+`", '%d-%m-%Y'), "`+req.body.mobile.toString()+`" , "`+req.body.city+`");`).then( data => {
    res.status(200).json('success');
  }).catch ( err => {
    res.status(500).json(err)
  })
})

router.post('/signup' , function (req, res, next) {
  db.sequelize.query(`INSERT INTO manager_data ( email , firstname , lastname , pwd , address , dob , company ) values ("`+req.body.email+`" ,"`+req.body.fname+`" , "`+req.body.lname+`" , "`+req.body.password+`" , "`+req.body.address+`" , STR_TO_DATE("`+req.body.dob+`", '%d-%m-%Y'), "`+req.body.company+`");`).then( data => {
      res.status(200).json('success');
  }).catch ( err => {
    if(JSON.stringify(err).indexOf('email must be unique') > 0){
      res.status(500).json('Error : Email must be unique')
    }else{
      res.status(500).json(err);
    }
  })
})

router.post('/login' , function(req, res, next) {
  var username = req.body.username;
	var password = req.body.password;
		db.sequelize.query(`SELECT COUNT(*) FROM manager_data WHERE email = '`+ username+`' AND pwd = '`+password+`';`).then( results => {
      if (JSON.stringify(results).indexOf('{"COUNT(*)":0') > -1) {
        res.status(200).json('Incorrect Username and/or Password!');
      }else{
        res.status(200).json("success")
      }
    })
})

router.post('/updateemp' , function (req, res, next) {
 let empid = req.body[0].empid;
 let rq = req.body[1].data;
  db.sequelize.query(`UPDATE employee_data SET  firstname = '`+rq.fname+`', lastname = '`+rq.lname+`' , address = '`+rq.address+`', dob = STR_TO_DATE("`+rq.dob+`", '%Y-%m-%d') , mobile = '`+rq.mobile+`' , city = '`+rq.city+`' WHERE empid = `+empid+`;`).then( data => {
    res.status(200).json('success');
  })

})

module.exports = router;
