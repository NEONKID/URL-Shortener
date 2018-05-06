const webpack = require('webpack')
const path = require('path')
const buildPath = path.resolve(__dirname, '/src/main/resources/static')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')

const config = {
    entry: [
        './src/main/view/index.js',
        'webpack/hot/only-dev-server'
    ],

    // Server Configuration options
    devServer: {
        contentBase: 'src/main/resources/templates',
        hot: true,
        inline: true,
        port: 4000,
        host: 'localhost',
        stats: {
            // 콘솔 로그를 최소화 합니다
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    },
    devtool: 'eval',
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    
    // 그 외 추가 플러그인
    // Javascript 파일을 압축하는 플러그인 외에도 엄청 많이 있음..
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    // Webpack 4 버전에서는,
    // react-hot-loader/webpack 을 추가하지 않아도 HotLoader Plugin 적용됨
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [nodeModulesPath],
                loaders: ['babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    }
}

module.exports = config;