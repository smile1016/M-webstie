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
// 复制html
function copyHtml() {
    return src('./src/views/*.html')
        .pipe(dest('./dev/'))
}
// 复制图片
function copyImages() {
    return src('./src/images/*.*')
      .pipe(dest('./dev/images/'))
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
            entry: './src/js/index.js',
            output: {
                //目录
                path: path.resolve(__dirname, './dev/js/'),
                // 文件名
                filename: 'all.js'
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
                    { test: /\.html$/, loader: "string-loader" }
                ]
            }

        }))
        .pipe(dest('./dev/js/'))
}
// 启动服务器
function startServer() {
    return src('./dev/')
        .pipe(gulpServer({
            port: 9090,
            // host: '0.0.0.0',
            //是否支持热更新
            livereload: true,
            //是否展示文件夹列表
            //directoryListing: true,
            //打开浏览器
            open: true,
            middleware:[
                proxy('/fetch',{
                    //自测环境地址
                // target:'http://localhost:9099/',
                target:'https://m.lagou.com/',
                //是否支持跨域
                changeOrigin:true,
                //路径重写
                pathRewrite:{
                    '^/fetch':''
                }
            })]
        }))
}

//监控文件的变化，当文件有变化时，同步到dev目录
function watchFile() {
    watch('./src/**/*.js', (cb) => {
        compileJS();
        cb();
    })

    watch('./src/style/*.scss', (cb) => {
        compileCSS();
        cb();
    })

    watch('./src/views/**/*.html', (cb) => {
        copyHtml();
        compileJS();
        cb();
    })
}

function copyLibs() {
    return src('./src/libs/*.*')
        .pipe(dest('./dev/libs/'))
}
exports.default = series(parallel(copyHtml,copyImages, copyLibs, compileCSS, compileJS), startServer, watchFile);