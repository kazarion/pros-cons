export default port => {
	return {
		devServer: {
			stats: 'errors-only',
			port: port
		}
	}
}
