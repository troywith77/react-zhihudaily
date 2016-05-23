var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.join(__dirname, 'public/'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /.scss$/,
				exclude: /node_modules/,
				loader: 'style!css!sass'
			}
		]
	},
	// proxy
	devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:3000",
        secure: false,
        rewrite: function(req, options) {
          //you can handle rewrite here if you need to
        }
      }
    }
  },
}
