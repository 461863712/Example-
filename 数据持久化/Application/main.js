/**
 * Created by DELL- on 2017/8/8.
 */
(function () {

    console.log(window.applicationCache);//应用缓存事件
    //已经缓存出来的内容下一次缓存出来的内容 还是之前缓存的内容

    //解决方式：更新应用缓存的配置文件
    window.addEventListener("onLine",function () {//有网调用
        window.applicationCache.onobsolete=function () {
            //更改应用缓存文件名字
            console.log("应用缓存文件失效");
            this.swapCache();//会把旧的应用缓存文件换成新的
            location.reload();//重新加载当前文档

        };
    })
})();