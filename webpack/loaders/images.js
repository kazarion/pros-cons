export default () => {
	return {
		module: {
			rules: [{
				exclude: [/node_modules/],
				test: /\.(jpg|png|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath:'../img/',
					limit: 10000
				}
			}]
		}
	}
}
