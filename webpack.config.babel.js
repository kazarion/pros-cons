import path                 from 'path'
import webpack              from 'webpack'
import HtmlWebpackPlugin    from 'html-webpack-plugin'
import CopyWebpackPlugin    from 'copy-webpack-plugin'
import merge                from 'webpack-merge'
import OpenBrowserPlugin    from 'open-browser-webpack-plugin'

import devserver            from './webpack/devserver/devserver'
import stylusCssExtract     from './webpack/loaders/stylus.css.extract'
import uglifyJS             from './webpack/loaders/js.uglify'
import images               from './webpack/loaders/images'
import jsx                  from './webpack/loaders/jsx'
import json                 from './webpack/loaders/json'
import fontFile             from './webpack/loaders/font-file'
import css                  from './webpack/loaders/css'

const hostname = 'localhost'
const port     = 8080

const PATHS = {
	src: path.join(__dirname, 'src/'),
	build: path.join(__dirname, 'build/')
};

const common = merge([
		{
				entry: {
						'index': PATHS.src + 'pages/index/index.js',
				},
				output: {
						path: PATHS.build,
						filename: 'cdn/js/[name].js'
				},
				cache: true,
				watch: true,
				watchOptions: {
						aggregateTimeout: 150
				},
				devtool: 'source-map',
				plugins: [
						new HtmlWebpackPlugin({
								filename: 'index.html',
								chunks: ['index'],
								template: PATHS.src + '/pages/index/index.html'
						}),
						new webpack.NoEmitOnErrorsPlugin(),
						new CopyWebpackPlugin([{
								from: PATHS.src + '/cdn/img',
								to: PATHS.build + '/cdn/img'
						}, {
								from: PATHS.src + '/cdn/browserconfig.xml',
								to: PATHS.build + '/[name].[ext]'
						}, {
								from: PATHS.src + '/cdn/manifest.json',
								to: PATHS.build + '/[name].[ext]'
						}]),
   					new webpack.LoaderOptionsPlugin({minimize: true}),
						new OpenBrowserPlugin({url:`http://${hostname}:${port}`})
				]
		},
		images(),
		stylusCssExtract(),
		json(),
		jsx(),
		fontFile()
]);

export default env =>{
	if (env === 'production'){
		return merge([
			common,
			devserver(port),
			uglifyJS()
		]);
	}
	if (env === 'development'){
		return merge([
			common,
			devserver(port)
		])
	}
}
