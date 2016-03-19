var path = require('path');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.join(__dirname, 'public/'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=react,presets[]=es2015'},
			{test: /.scss$/, exclude: /node_modules/, loader: 'style!css!sass'}
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
      },
      'http://pic1.zhimg.com/*': {
      	target: "https://images.weserv.nl/?url=pic4.zhimg.com",
        secure: false,
      }
    }
  },
}