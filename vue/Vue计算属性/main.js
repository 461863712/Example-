/**
 * Created by DELL- on 2017/8/22.
 */
(function () {

    new Vue({
        el:"#app",
        data:{
            message:"abc",
            age:"10"
        },
        computed:{
            reversedMessage:function () {
                return this.message+this.age
            }
        }
    })

})();