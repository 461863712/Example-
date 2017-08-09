var express = require('express');
var router = express.Router();
var createConn=require("../http/httpRequest");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', function(req, res, next) {
  const conn=createConn();
  conn.connect1().then(function () {
      return conn.query1("INSERT INTO `register` (`user`, `password`, `age`) VALUES (?, ?,?)",[req.body.user,req.body.password,req.body.age])
  }).then(result=>{
      res.json({state:1,message:"ok",aa:result});
  }).catch(error=>{
    res.json({state:2,message:"bug"});//注册失败
  })
});

router.post('/login', function(req, res, next) {
    const conn=createConn();
    conn.connect1().then(function () {
        return conn.query1("SELECT * FROM `register` WHERE `user` LIKE ? AND `password` LIKE ?",[req.body.user,req.body.password])
    }).then(result=>{
        res.json({state:1,message:"ok",aa:result});
    }).catch(error=>{
        res.json({state:2,message:"bug"});//登录失败
    })
});

module.exports = router;
