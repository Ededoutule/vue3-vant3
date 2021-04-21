<template>
	<div class="container">
		<van-list :finished="finished" finished-text="没有更多了">
			<van-cell v-for="(item, index) in searchTipsList" :key="index" :title="item" />
		</van-list>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
	name: 'SearchTipsList',
	props: {
		searchTipsList: {
			type: Array,
		},
	},
	setup() {
		const state = reactive({
			list: [1, 2, 3, 45],
			finished: true,
		})
		const refData = toRefs(state)
		return {
			...refData,
		}
	},
}
</script>

<style lang="scss" scoped></style>
