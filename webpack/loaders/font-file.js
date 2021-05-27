export default () => {
	return {
		module: {
			rules: [{
				exclude: [/node_modules/],
				test: /\.(eot|woff|woff2|ttf|otf)$/,
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					outputPath:'cdn/fonts/',
					limit: 10000
				}
			}]
		}
	}
}
