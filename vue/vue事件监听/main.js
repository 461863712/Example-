/**
 * Created by DELL- on 2017/8/22.
 */
(function () {

    new Vue({
        el:"#app",
        data:{
            message:"ss",
            number: 0
        },
        methods: {
            say: function (message) {
                alert(message)
            },
            warn: function (message, event) {
                // 现在我们可以访问原生事件对象
                if (event) event.preventDefault();
                alert(message)
            }
        }
    });

})();