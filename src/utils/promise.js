import router from 'vue-router'

router.beforeEach((to, from, next) => {
	if (to.path == '/content') {
		next()
	}
})
