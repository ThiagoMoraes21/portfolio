const gulp    = require('gulp');
var uglyfly = require('gulp-uglyfly');
const cssnano = require('gulp-cssnano');

/**********************************
*  COPY FOLDERS AND FILES TO DIST
***********************************/

//  Move the css file to the public/css/bootstrap folder
gulp.task('moveBootstrapCSS', () =>
  gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap.min.css.map'])
      .pipe(gulp.dest('dist/public/css/bootstrap'))
);

//  Move javascript files into public/js/bootstrap folder
gulp.task('moveBootstrapJS', () =>
  gulp.src(['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js.map',
            'node_modules/jquery/dist/jquery.min.js'])
      .pipe(gulp.dest('dist/public/js/bootstrap'))
);

// Copy images to the dist folder
gulp.task('images', () =>
  gulp.src('app/public/img/**/*.+(png|jpg|jpeg|gif|svg)')
      .pipe(gulp.dest('dist/public/img'))
);

//  Copy typeit to the dist folder
gulp.task('typeit', () =>
  gulp.src('app/public/typeit/**/*')
      .pipe(gulp.dest('dist/public/typeit'))
);

//  Copy views/partials to the dist folder
gulp.task('viewsPartials', () =>
  gulp.src('app/views/partials/*.ejs')
      .pipe(gulp.dest('dist/views/partials'))
);

//  Copy views to the dist folder
gulp.task('views', () =>
  gulp.src('app/views/*.ejs')
      .pipe(gulp.dest('dist/views'))
);

//  Move Routes
gulp.task('moveRoutes', () =>
  gulp.src('app/routes/*.js')
      .pipe(gulp.dest('dist/routes'))
);

//  Move App.js and seeeds.js
gulp.task('moveAppjs', () =>
  gulp.src('app/*.js')
      .pipe(gulp.dest('dist'))
);


/***************
*   MINIFY JS
****************/

//  Minify models
gulp.task('compressModels', () =>
  gulp.src('app/models/*.js')
    .pipe(uglyfly())
    .pipe(gulp.dest('dist/models'))
);

// Minify public js
gulp.task('compressJs', () =>
  gulp.src('app/public/js/*.js')
    .pipe(uglyfly())
    .pipe(gulp.dest('dist/public/js'))
);

// // Minify routes
// gulp.task('compressRoutes', () =>
//   gulp.src('app/routes/*.js')
//     .pipe(uglyfly())
//     .pipe(gulp.dest('dist/routes'))
// );
//
// // Minify App js
// gulp.task('compressAppjs', () =>
//   gulp.src('app/*.js')
//     .pipe(uglyfly())
//     .pipe(gulp.dest('dist'))
// );

/***************
* MINIFY CSS
****************/
gulp.task('compressCSS', () =>
     gulp.src('app/public/css/main.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/public/css'))
);

gulp.task('default',
 gulp.parallel(
   'moveBootstrapCSS',
   'moveBootstrapJS',
   'images',
   'typeit',
   'viewsPartials',
   'views',
   'compressModels',
   'compressJs',
   // 'compressRoutes',
   // 'compressAppjs',
   'moveRoutes',
   'moveAppjs',
   'compressCSS'
 ));
