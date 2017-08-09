/**
 * Created by DELL- on 2017/7/31.
 */
const mysql=require("mysql");

module.exports=function () {
  const conn=mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"",
      database:"king-of-glory"
  });

  conn.connect1=function () {
     return new Promise(function (resolve,reject) {
         conn.connect(function (err) {
             if(!err){
                 resolve(conn);
             }else {
                 reject(err);
             }
         });
     })
  };
  
  conn.query1=function (sql,valve) {
      return new Promise(function (resolve,reject) {
         conn.query(sql,valve,function (err,rows) {
             if(!err){
                 resolve(rows);
             }else {
                 reject(err);
             }
         })
      });
  };

  return conn;
};
