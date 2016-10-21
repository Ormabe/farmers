const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
[
	{
	entry: './src/App.js',
	output: {
		path: '../',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: [/\.jsx?$/],
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {

				}
			}
		]	
	}
},
{
	entry: './sass/styles.scss',
	output: {
		path: './css',
		filename: 'styles.css'
		},
	module: {
		loaders: [
			{	
        		test: /\.s?css$/i,
        		loader: ExtractTextPlugin.extract({
	          		fallbackLoader: 'style-loader',
	          		loader: 'sass-loader!css-loader?includePaths[]='
          		})
			},
			{
				test: [/\.(jpe?g|png|gif|svg)$/i],
				loader: 'url?limit=10000&name=images/[hash].[ext]'
			} 
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css',{
			allChunks: true
		})
	]
}]
}