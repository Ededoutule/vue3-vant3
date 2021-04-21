<template>
	<router-view></router-view>
	<NavFooter v-if="route.meta.show" :navObj="navObj"></NavFooter>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

import NavFooter from './components/NavFooter'
export default {
	components: {
		NavFooter,
	},
	setup() {
		const route = useRoute()
		const navObj = ref([
			{
				icon: 'smile',
				color: 'red',
				text: '首页',
				route: '/home',
			},
			{
				icon: 'shop',
				color: '#333',
				text: '分类',
				route: '/shop',
			},
			{
				icon: 'cart',
				color: '#555',
				text: '购物车',
				route: '/cart',
			},
			{
				icon: 'friends',
				color: '#777',
				text: '个人中心',
				route: '/content',
			},
		])

		return {
			route,
			navObj,
		}
	},
}
</script>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
	background-color: #c0c2c4;
}
html,
body {
	height: 100%;
}
.ttt {
	width: 20px;
	height: 20px;
	background-color: red;
}
</style>
