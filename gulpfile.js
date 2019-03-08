var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function() {
  return gulp
    .src("src/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("sass"));
