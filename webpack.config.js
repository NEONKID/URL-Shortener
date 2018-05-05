let webpack = require('webpack')

module.exports = {
    entry: './src/main/view/index.js',
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname + '/src/main/resources/static/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },
    // 그 외 추가 플러그인
    // Javascript 파일을 압축하는 플러그인 외에도 엄청 많이 있음..
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}