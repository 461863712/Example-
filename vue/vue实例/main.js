/**
 * Created by DELL- on 2017/8/17.
 */
(function () {

    var vm=new Vue({
        el:"#app",
        data:{
            message:"Hello World"
        },
        beforeCreate:function () {
            console.log("beforeCreate");
            this.message="a";//没有改变,失效
        },
        created:function () {
            //生命周期钩子 ,created 这个钩子在实例被创建之后被调用
            console.log("created");
            this.message="a";//改变
        },
        beforeMount:function () {
            console.log("beforeMount");
            console.log(this.$el);//没有挂载{{message}}
        },
        mounted:function () {
            console.log("mounted");
            //debugger
            console.log(this.$el);//Hello World
        },
        beforeUpdate:function () {
            console.log("beforeUpdate")
        },
        updated:function () {
            console.log("updated")
        },
        beforeDestroy:function () {//执行vm.$destroy()调用
            console.log("beforeDestroy");
            this.message="b";//失效
        },
        destroyed:function () {
            console.log("destroyed");
            this.message="c";
        }
    });
    vm.$destroy()
})();