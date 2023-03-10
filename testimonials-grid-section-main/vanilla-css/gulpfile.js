var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var print = require("gulp-print").default;

gulp.task("sass", function (cb) {
    gulp.src("./src/*.scss")
        .pipe(print())
        .pipe(sass({ indentWidth: 4 }).on("error", sass.logError))
        .pipe(gulp.dest("./styles"));
    cb();
});

gulp.task(
    "default",
    gulp.series("sass", function (cb) {
        gulp.watch("./src/*.scss", gulp.series("sass"));
        cb();
    })
);
