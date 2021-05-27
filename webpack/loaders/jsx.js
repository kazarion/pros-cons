export default () => {
    return {
        module: {
            rules: [{
              exclude: /(node_modules)/,
              test: /\.jsx?$/,
                         loader: 'babel-loader',
                         query: {
                             presets: ['es2015', 'react']
                         }
            }]
        }
    }
}
