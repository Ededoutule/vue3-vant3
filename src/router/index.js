import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/index.vue'

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			show: true,
			index: 0,
		},
		children: [
			{
				path: '/home/search',
				name: 'SearchPopup',
				component: () => import('../views/SearchPopup/index.vue'),
				meta: {
					show: false,
				},
			},
		],
	},
	{
		path: '/shop',
		name: 'Shop',
		component: () => import('../views/Shop/index.vue'),
		meta: {
			show: true,
			index: 1,
		},
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../views/Cart/index.vue'),
		meta: {
			show: true,
			index: 2,
		},
	},
	{
		path: '/content',
		name: 'Content',
		component: () => import('../views/Content/index.vue'),
		meta: {
			show: true,
			index: 3,
		},
	},

	// {
	//   path: '/about',
	//   name: 'About',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

// router.beforeEach((to, from, next) => {
// 	console.log(to, '去的地址')
// 	console.log('from :>> ', from)
// 	next()
// })
export default router
