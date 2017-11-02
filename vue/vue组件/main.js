/**
 * Created by DELL- on 2017/8/24.
 */
(function () {

    /*注册一个全局组件，你可以使用 Vue.component(tagName, options)*/
    function vueQ() {
        Vue.component("my-component",{
            //<my-component></my-component>
            template: '<div>A custom component!</div>'
        });

        new Vue({
            el:"#app",
            data:{
                message:"Hello World"
            }
        });
    }

    /*组件仅在另一个实例/组件的作用域中可用*/
    function vueJ() {
        var Child = {
            template: '<div>J custom component!</div>'
        };
        new Vue({
            el:"#app",
            components: {
                // <my-component> 将只在父模板可用
                'my-component': Child
            }
        })
    }
    vueJ();
})();