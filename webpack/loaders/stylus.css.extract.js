import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'

export default paths => {
		return {
				module: {
						rules: [{
										test: /\.styl$/,
										include: paths,
										use: ExtractTextPlugin.extract({
												// publicPath: '../',
												fallback: 'style-loader',
												use: [{
																loader: 'css-loader',
																options: { minimize: false }
														}, {
																loader: 'postcss-loader',
																options: {
																		plugins: () => [autoprefixer('last 100 versions')],
																		sourceMap: true
																}
														},
														'resolve-url-loader',
														'stylus-loader'
												]
										}),
								},
								{
										test: /\.css$/,
										include: paths,
										use: ExtractTextPlugin.extract({
												fallback: 'style-loader',
												use: [{
																loader: 'css-loader',
																options: { minimize: false }
														}, {
																loader: 'postcss-loader',
																options: {
																		plugins: () => [autoprefixer('last 100 versions')],
																		sourceMap: true
																}
														},
														'resolve-url-loader',
														'css-loader'
												]
										})
								}
						]
				},
				plugins: [
						new ExtractTextPlugin('cdn/css/[name].css')
				]
		}
}
