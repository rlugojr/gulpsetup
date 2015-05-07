var gulp = require("gulp");

/*-------------------------------------------------------------------
Static asset revisioning by appending content hash to filenames: unicorn.css → unicorn-098f6bcd.css
Create manifest file and replace paths in html file
-------------------------------------------------------------------*/
gulp.task("rev", ["revcss", "revjs", "revcollectcss", "revcollectjs"]);