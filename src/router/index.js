import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				title: 'Home'
			}
		}
	]
});

export default router;