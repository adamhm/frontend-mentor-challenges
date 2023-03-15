const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const print = require("gulp-print").default;

function buildStyle() {
    return src("./src/*.scss")
        .pipe(print())
        .pipe(sass({ indentWidth: 4 }).on("error", sass.logError))
        .pipe(dest("./styles"));
}

exports.default = function () {
    watch("./src/*.scss", buildStyle);
};
