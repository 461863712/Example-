/**
 * Created by DELL- on 2017/7/31.
 */
(function () {

    Vue.component('todo-item', {
        // todo-item 组件现在接受一个
        // "prop"，类似于一个自定义属性
        // 这个属性名为 todo。
        props: ['todo'],
        template: '<li>{{ todo.text}}</li>'
    });
    var config=new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!',
            seen:true,
            list:[
                {text:"aaaaaaaa"},
                {text:"bbbbbbbb"},
                {text:"cccccccc"}
            ]
        },
        methods:{
            reverseMessage:function () {
                console.log(this);
                this.message=this.message.split("").reverse().join("");
            }
        }
    });
})();