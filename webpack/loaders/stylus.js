export default paths => {
	return {
		module: {
			rules: [{
				test: /\.styl$/,
				include: paths,
				use: [
					'style-loader',
					'css-loader',
					'stylus-loader'
				]
			}]
		}
	}
}