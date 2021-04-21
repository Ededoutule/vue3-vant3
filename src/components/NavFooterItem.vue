<template>
	<div class="item-page" :style="{ color: navItem.color }" @click="goTo(navItem.route)">
		<van-icon class="icon" :name="navItem.icon" />
		<div>{{ navItem.text }}</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
	props: {
		navItem: {
			type: Object,
			defined: {},
		},
	},
	setup() {
		const Router = useRouter()
		const goTo = (item) => {
			Router.push(item)
		}
		return {
			goTo,
		}
	},
}
</script>

<style lang="scss" scoped>
.item-page {
	height: 100%;
	padding-top: 5px;
	background-color: #fff;

	.icon {
		height: 50%;
		font-size: 22px;
	}
}
</style>
