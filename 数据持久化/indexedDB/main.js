/**
 * Created by DELL- on 2017/8/8.
 */
(function () {
    var database=null;//数据库的对象

    //打开、创建数据库
    function openDB() {
        var request=window.indexedDB.open("noteDB",2);//打开、创建数据库
        request.onerror=function (error) {//打开失败
            console.log(error);
        };
        request.onsuccess=function () {//打开成功
            console.log("打开数据库成功");
            database=this.result;
            console.log(database);
            searchAll();
            search();
            deleteData();
            update();
        };
        request.onupgradeneeded=function () {//版本号失败，或者第一次打开
            console.log("更新数据库成功",this);
            var db=this.result;//获取数据库对象
            var tableName="note";
            if(!db.objectStoreNames.contains(tableName)){
                console.log("可以建表");
                //建表
                var objectStore=db.createObjectStore(tableName,{ keyPath: "date"});
                /**
                 * 1.字段的名字
                 * 2.字段查找的名字
                 */
                objectStore.createIndex("title","title");
                objectStore.createIndex("content","content");
                objectStore.createIndex("date","date");
            }
        };
    }

    //添加数据
    function addData(info) {
        /**
         * transaction创建一个数据库事务
         * 添加数据使用readwrite
         * 读取数据使用readonly
         */
        var databaseTransaction=database.transaction(["note"],"readwrite");
        //objectStore方法用于获取指定的对象仓库。
        var databaseObjectStore=databaseTransaction.objectStore("note");
        //用add方法往里面添加数据了
        var addRequest=databaseObjectStore.add(info);
        addRequest.onerror = function(e) {
            console.log("Error",e.target.error.name);
        };
        addRequest.onsuccess = function(e) {
            console.log("数据添加成功！");
        }
    }
    
    //查询数据
    function searchAll() {
        var databaseTransaction=database.transaction(["note"],"readonly");
        var databaseObjectStore=databaseTransaction.objectStore("note").getAll();
        databaseObjectStore.onsuccess = function(result) {
            console.log(result.target.result);
        }
    }

    //查询数据
    function search() {
        var databaseTransaction=database.transaction(["note"],"readonly");
        var objectStore1=databaseTransaction.objectStore("note").get(1502242084206);
        var objectStore2=databaseTransaction.objectStore("note").getKey(1502242084206);
        objectStore1.onsuccess=function (result) {
            console.log(result.target.result);//输出结果
        };
        objectStore2.onsuccess=function (result) {
            console.log(result.target.result);
            //有就输出查询条件；
        }
    }

    //删除数据
    function deleteData() {
        var databaseTransaction=database.transaction(["note"],"readwrite");
        //objectStore方法用于获取指定的对象仓库。
        var databaseDelete=databaseTransaction.objectStore("note").delete(1502242084206);
        databaseDelete.onsuccess=function (result) {
            console.log(result);
        }
    }
    
    //更新数据
    function update() {
        var databaseTransaction=database.transaction(["note"],"readwrite");
        //objectStore方法用于获取指定的对象仓库。
        var updatePut={
            title:"更新数据2",
            content:"更新数据2",
            date:1502243041525
        };
        var databaseDelete=databaseTransaction.objectStore("note").put(updatePut);
        databaseDelete.onsuccess=function (result) {
            console.log(result.target.result);
            if(result.target.result===1502243041525){
                console.log("数据更新成功");
            }
        }
    }

    function loadView() {
        var titleInput=document.querySelector(".addNoteView input");
        var contentInput=document.querySelector(".addNoteView textarea");
        var saveButton=document.querySelector(".addButton");

        saveButton.onclick=function () {
            var title=titleInput.value;
            var content=contentInput.value;
            var time=new Date();
            var date=time.getTime();
            addData({
                title:title,
                content:content,
                date:date
            });
        }
    }
    
    function init() {
        if(!indexedDB){
            alert("浏览器不兼容indexedDB");
            return;
        }else {
            openDB();
            loadView();
        }
    }

    init();
})();
