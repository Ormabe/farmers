const path = require('path');
const autoprefixer = require('autoprefixer')

module.exports = {
	context: __dirname,
	entry: './main.js',
	output: {
	    path: __dirname,
	    filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	resolve : {
		alias: {
			js: __dirname,
		}
	},    
	module: {
	    loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
					query: {
						plugins: ['transform-runtime'],
						presets: ['es2015', 'react', 'stage-0']
	        		}
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: [/\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf|ico)$/i],
				loader: 'file-loader?name=[name].[ext]'
			},
			{
				test: /\.html$/,
				loader: ['file?name=[name].[ext]']
			// },
			// {
			// 	test: /\.(ico)$/,
			// 	loader: "static-loader"
			} 
	    ]
	},
}