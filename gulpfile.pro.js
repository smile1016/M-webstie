const {
    series,
    parallel,
    src,
    dest,
    watch
} = require('gulp')
const gulpServer = require('gulp-webserver');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const webpackStream = require('webpack-stream')
const path = require('path');
const proxy = require('http-proxy-middleware');
const del = require('del');
// 复制html
function copyHtml() {
    return src('./src/views/*.html')
        .pipe(dest('./dest/'))
}
// 复制图片
function copyImages() {
    return src('./src/images/*.*')
        .pipe(dest('./dest/images/'))
}

//编译css
function compileCSS() {
    return src('./src/style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('all.css'))
        .pipe(dest('./dev/style/'))
}
// 编译JS
function compileJS() {
    return src('./src/js/index.js')
        .pipe(webpackStream({
            mode: 'development',
            devtool: 'inline-source-map',
            entry: {
                index: './src/js/index.js',
                detail: './src/js/detail.js'
            },
            output: {
                //目录
                path: path.resolve(__dirname, './dest/js/'),
                // 文件名
                filename: '[name]-min.js'
            },
            module: {
                rules: [
                    // the 'transform-runtime' plugin tells Babel to
                    // require the runtime instead of inlining it.
                    {
                        //匹配js文件
                        test: /\.js$/,
                        //排除文件
                        exclude: /(node_modules)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: ['@babel/plugin-transform-runtime']
                            }
                        }
                    },
                    {
                        test: /\.html$/,
                        loader: "string-loader"
                    }
                ]
            }

        }))
        .pipe(dest('./dest/js/'))
}





function copyLibs() {
    return src('./src/libs/*.*')
        .pipe(dest('./dest/libs/'))
}
// 删除不需要的文件
function remove() {
    return del(['./dest'])
}
exports.default = series(remove, parallel(copyHtml, copyImages, copyLibs, compileCSS, compileJS));