const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isDev = !(env && env.production);

    console.log(`Executing ${isDev ? 'DEVELOPMENT' : 'PRODUCTION'} build`);

    const shared = () => ({
        entry: {
            main: ['./src/index.tsx'],
            admin: ['./src/admin.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)?$/,
                    include: /src/,
                    use: 'awesome-typescript-loader?silent=true'
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                    use: 'file-loader'
                }
            ]
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'wwwroot', 'js'),
            publicPath: '/js/',
        },
        plugins: [
            new CheckerPlugin(),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/js/vendor-manifest.json')
            }),
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                actions: path.resolve(__dirname, 'src/actions/'),
                components: path.resolve(__dirname, 'src/components/'),
                constants: path.resolve(__dirname, 'src/constants/'),
                reducers: path.resolve(__dirname, 'src/reducers/'),
                styles: path.resolve(__dirname, 'src/styles'),
                utilities: path.resolve(__dirname, 'src/utilities')
            }
        },
        stats: { modules: false },
    });

    const dev = () => ({
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        plugins: [
            new WebpackShellPlugin({
                onBuildStart: ['yarn run csharp-models-to-typescript --config=tstranslate.json']
            })
        ]
    });

    const prod = () => ({
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: ExtractTextPlugin.extract({ 
                        fallback: 'style-loader', 
                        use: ['css-loader', 'sass-loader']
                    })
                }
            ]
        },
        plugins: [
            new UglifyJSPlugin(),
            new ExtractTextPlugin('../styles/styles.css')
        ]
    });

    return isDev ? merge(shared(), dev()) : merge(shared(), prod());
};
