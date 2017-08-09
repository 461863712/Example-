/**
 * Created by DELL- on 2017/7/31.
 */
(function () {

    var app = new Vue({
        el: '#app',
        data: {
            message: '页面加载于 ' + new Date(),
            seen:true,
            todos: [
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
            ],
            asss:'Hello Vue.js!'
        },
        components:{"zh":{
            template:"<div>hello world</div>"
             }

        },

        methods: {
            reverseMessage: function () {
                this.asss = this.asss.split('').reverse().join('')
            }
        }
    })

})();