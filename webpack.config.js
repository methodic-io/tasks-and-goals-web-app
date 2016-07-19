const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env) => (
  {
    entry: './js/app.js',
    output: {
      filename: 'bundle.[chunkhash].js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    devServer: {
      inline: true,
      port: 3333,
    },
    context: resolve(__dirname, 'src'),
    devtool: 'source-map',
    bail: env.prod,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015-webpack', 'react'],
          },
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css?source-map', 'sass?source-map'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
    externals: {
      cheerio: 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
  }
);
