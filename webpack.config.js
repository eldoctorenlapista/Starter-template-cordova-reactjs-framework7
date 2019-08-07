const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'www/dist/js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /platforms/, /plugins/, /res/],
        use: ['babel-loader']
      },
      {
          test: /\.css$/,
          include: /node_modules/,
          loaders: ['style-loader', 'css-loader'],
       }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}
