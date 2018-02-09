const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = (env) => {
    return [{
        devtool: 'inline-source-map',
        entry: {
            main: ['./src/index.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)?$/,
                    include: /src/,
                    use: 'awesome-typescript-loader?silent=true'
                },
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                    use: 'file-loader'
                }
            ]
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'wwwroot', 'js'),
            publicPath: '/js/',
        },
        plugins: [
            new CheckerPlugin(),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/js/vendor-manifest.json')
            }),
            new WebpackShellPlugin({
                onBuildStart: ['yarn run csharp-models-to-typescript --config=tstranslate.json']
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                actions: path.resolve(__dirname, 'src/actions/'),
                components: path.resolve(__dirname, 'src/components/'),
                constants: path.resolve(__dirname, 'src/constants/'),
                reducers: path.resolve(__dirname, 'src/reducers/'),
                styles: path.resolve(__dirname, 'src/styles')
            }
        },
        stats: { modules: false },
    }]
};
