// webpack.mix.js

let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js');
mix.sass('resources/scss/app.scss', 'public/css');
//mix.sass('resources/js/app.scss', 'public/css').setPublicPath('public/css');