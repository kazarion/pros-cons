import webpack from 'webpack'
export default () => {
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				sourceMap: true,
				compress: {
					warnings: false,
				}
			})
		]
	};
};
