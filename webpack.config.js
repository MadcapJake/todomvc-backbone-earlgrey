module.exports = {
  entry: {
    app: [ './src/app.eg' ]
  },
  output: {
    path: './build',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.eg/, loader: "earlgrey-loader?es5=true&sourceMaps=inline"}
    ]
  }
}
