export default () => {
	return {
		module: {
			rules: [{
				exclude: [/node_modules/],
				test: /\.json$/,
				loader: 'json-loader'
			}]
		}
	}
}
