const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: './',
	css: {
		extract: false,
	},
	configureWebpack: {
		optimization: {
			splitChunks: false,
		},
	},
})
