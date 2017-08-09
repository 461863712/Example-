/**
 * Created by DELL- on 2017/8/9.
 */
(function () {

    function createDatebase() {
        /**
         * 数据库名称
         * 版本号
         * 描述文本
         * 数据库大小
         * @type {Database}
         */
        var dataBase=openDatabase("mydb","1.0","student",2 * 1024 * 1024);
        if (!dataBase) {
            console.log("数据库创建失败！");
        } else {
            console.log("数据库创建成功！");
            dataBase.transaction(function (db) {
                db.executeSql("create table if not exists user (id REAL UNIQUE, name TEXT)");//创建表
                db.executeSql("insert  into  user (id, name) values(?, ?)", [2, '李挺军']);//添加数据
            });
        }
    }

    function init() {
        createDatebase();
    }

    init();
})();