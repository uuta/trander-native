const mix = require('laravel-mix')

mix.browserSync('trander.net')
  .sass('resources/sass/app.scss', 'public/css')
  .version()