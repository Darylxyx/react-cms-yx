var webpack = require('webpack'),
	path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: 'bundle',
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=resource/images/[hash:8].[name].[ext]'
			}
		]
	}
}