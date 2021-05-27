export default paths => {
	return {
		module: {
			rules: [{
				exclude: [/node_modules/],
				test: /\.css$/,
				include: paths,
				use: [
					'style-loader',
					'css-loader'
				]
			}]
		}
	}
}
