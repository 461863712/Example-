/**
 * Created by DELL- on 2017/8/22.
 */
(function () {

  new Vue({
      el:"#app",
      data:{
          todo:"zz",
          list:[],
          filterTodo:"",
          filterTodos:[]
      },
      methods:{
          addTodo:function () {
              this.list.push(this.todo);
              this.filterTodos.push(this.todo);
          },
          addFilterTodo:function () {
              this.filterTodos=this.list.filter(function (e) {
                  console.log(e);
                    return e.match(new RegExp('^'+this.filterTodo+'$'))
                })
          }
      }
  })

})();