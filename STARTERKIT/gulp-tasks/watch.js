// -------------------------------------
//   Task: Watch
// -------------------------------------
'use strict';
module.exports = function (gulp, plugins, options) {
  gulp.task('watch', ['watch:sass', 'watch:styleguide', 'watch:js']);

  gulp.task('watch:js', function () {
    return plugins.watch(options.scripts + '**/*.js', ['lint:js']);
  });

  gulp.task('watch:sass', function () {
    return plugins.watch([options.styles.source + '**/*'], ['compile:sass', 'minify:css']);
  });

  gulp.task('watch:styleguide', function () {
    return plugins.watch([
      options.styles.source + '**/*'
    ], ['compile:styleguide']);
  });
};
