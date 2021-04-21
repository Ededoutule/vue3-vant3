<template>
	<div class="home-page">
		<div class="header">
			<Header :search-color="color" @search-value="searchValue" @click="goToPoput"></Header>
		</div>
		<van-loading v-if="Object.keys(res).length < 1" type="spinner" color="#1989fa" />
		<div v-else class="home">
			<!-- 轮播图 -->
			<van-swipe :autoplay="3000" lazy-render>
				<van-swipe-item v-for="image in res.banner" :key="image">
					<img style="width: 100%" :src="image.image_url" />
				</van-swipe-item>
			</van-swipe>
			<!-- {{ res }} -->
		</div>
		<transition name="van-slide-right">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

import { getHome } from '@/api/home.js'

import Header from '@/components/Header.vue'
// import axios from 'axios'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	setup() {
		let res = ref({})
		const router = useRouter()
		const color = ref('#222')
		const searchValue = (value) => {
			const rang = Math.floor(Math.random() * 10 - 2)
			color.value = `#${rang}2${rang}`
			console.log('搜索的值', value)
		}
		const goToPoput = () => {
			router.push('/home/search')
		}
		onMounted(async () => {
			res.value = (await getHome()).data.data
		})
		return {
			res,
			searchValue,
			goToPoput,
		}
	},
	components: {
		Header,
	},
}
</script>

<style lang="scss">
.home-page {
	position: relative;
	height: 100%;
	.header {
		// position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 10;
	}
	.home {
		// margin-top: 54px;
	}
}
</style>
