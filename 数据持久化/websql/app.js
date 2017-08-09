/**
 * Created by DELL- on 2017/8/9.
 */
(function () {
    var dataBase=null;
    //打开ia、创建数据库
    function openDB() {
        dataBase=openDatabase("mydb","1.0","student",2 * 1024 * 1024);
        if (!dataBase) {
            console.log("数据库创建失败！");
        } else {
            console.log("数据库创建成功！");
            // createTable();
            // Insert();
            searchAll();
            // deleteDate();
            upData();
        }
    }

    //sql使用
    function addSql(sql,arg,callback) {
        dataBase.transaction(function (db) {
            db.executeSql(sql,arg,function (db,result) {
                if(callback){
                    callback(result);
                }
            },function (db,error) {
                console.log(error);
            });
        })
    }
    //建表
    function createTable() {
        addSql("create table if not exists user (id REAL UNIQUE, name TEXT, age INT)");
    }
    //添加数据
    function Insert() {
        addSql("insert  into  user (id, name, age) values(1, '李挺军', 15)");
    }
    //查询数据
    function searchAll() {
        addSql("select  *  from  user",[],function (result) {
            console.log(result);
            var content="";
            for(var i=0;i<result.rows.length;i++){
                content+="<p>"+result.rows[i].name+"</p>"
            }
            document.body.innerHTML=content;
        });
    }
    //删除数据
    function deleteDate() {
        addSql("delete from user where id=1",[],function (db,result) {
            console.log(result);
        });
    }
    //修改数据
    function upData() {
        addSql("update  user  set  name =  ?  where  id= ?", ["李挺军", 3],function (db,result) {
            console.log(db,result);
        })
    }

    function init() {
        openDB();
    }

    init();
})();