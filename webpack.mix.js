let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'dist')
  .react() // Add .react() to process React components
  .setPublicPath('dist')
  .version();
