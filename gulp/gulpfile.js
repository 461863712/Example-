/**
 * Created by DELL- on 2017/8/15.
 */
var gulp=require("gulp");
var connect=require("gulp-connect");
var htmlmin=require("gulp-htmlmin");
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");
var imagemin=require("gulp-imagemin");
// var babel=require("babel");
// var babelGulp=require("gulp-babel");
// var sourcemaps=require("gulp-sourcemaps");

gulp.task("sleep",function () {
    console.log("aaa");
});
gulp.task("eat",function () {
    console.log("bbb");
});
/*default默认任务*/
gulp.task("default",["sleep","eat","watch","server"],function () {
    console.log("ok");
});
//从src添加到dest
gulp.task("copy-html",function () {
    return gulp.src("index.html")
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest("dist/"))
        .pipe(connect.reload());
});
gulp.task("copy-js",function () {
    return gulp.src(["main.js","index.js"])
        .pipe(concat("max.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/"))
        .pipe(connect.reload());
});
gulp.task("image",function () {
    return gulp.src("a.jpg")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img/"))
        .pipe(connect.reload());
});

//实时监听-刷新
gulp.task("watch",function () {
    return gulp.watch("index.html",["copy-html","copy-js","compile.js","image"]);
});
//gulp-connect实时更新页面
gulp.task("server",function () {
    connect.server({
        root:"dist",//服务器更目录
        port:8080,//端口
        livereload:true//实时加载http://localhost:8080/
    })
});
//gulp-htmlmin 压缩html
//gulp-concat 合并
//gulp-babel ES6
gulp.task("compile.js",function () {
    // return gulp.src("main.js")
    //     .pipe(sourcemaps.init())
    //     // .pipe(babel())
    //     .pipe(concat("min.js"))
    //     .pipe(sourcemaps.write("."))
    //     .pipe(gulp.dest("dist/"))
});
