/**
 * Created by DELL- on 2017/8/17.
 */
(function () {

    var vm=new Vue({
        el:"#app",
        data:{
            message:"Hello World",
            url:"#"
        },
        filters: {//过滤{{ message | capitalize }}
            capitalize: function (value) {
                if (!value) {
                    return ""
                }else {
                    return "李晓军是李挺军的侄子"
                }
            }
        }
    });

})();