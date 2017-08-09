/**
 * Created by DELL- on 2017/7/24.
 */
(function () {
    function Http() {
        this.result="";
        this.form=document.querySelector("form");
        var self=this;
        this.form.onsubmit=function (e) {
            e.preventDefault();
            this.user=document.querySelector("input[name=user]");
            this.password=document.querySelector("input[name=password]");
            this.number=document.querySelector("input[name=number]");
            self.post("http://localhost:3000/users/register",{user:this.user,password:this.password,number:this.number});
        };
    }
    Http.prototype.post=function (url,data) {
        this.xml=new XMLHttpRequest();
        this.xml.open("POST",url,data,false);
        this.xml.onreadystatechange=function () {
            if(this.readyState===4){
                self.result=this;
                console.log(self.result);
            }
        };
        this.data=JSON.stringify(data);
        this.xml.send(this.data);
        // console.log(self.result);
    };

    new Http();
})();