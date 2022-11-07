module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: "@import '@/assets/css/vuetifyGlobals.scss'"
			},
			scss: {
				prependData: "@import '@/assets/css/vuetifyGlobals.scss';"
			}
		}
	},
	transpileDependencies: [
		'vuetify'
	]
}
