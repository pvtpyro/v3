import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				background: colors.white,
				surface: colors.green.lighten2,
				primary: '#1f1f1f',
				anchor: colors.red.base,
				text: colors.purple.darken1,
				secondary: '#91defb',
				accent: colors.lightBlue.lighten1,
				error: '#B00020',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FB8C00',
			}
		}
	}
});
