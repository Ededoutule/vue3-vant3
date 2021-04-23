<template>
	<div class="container">
		<van-list :finished="finished" finished-text="没有更多了">
			<van-cell
				v-for="(item, index) in searchTipsList"
				:key="index"
				:title="item"
				@click="tipsItem(item)"
			/>
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
	setup(prop, { emit }) {
		const state = reactive({
			finished: true,
		})
		const refData = toRefs(state)
		const tipsItem = (item) => {
			emit('tipsItem', item)
		}
		return {
			...refData,
			tipsItem,
		}
	},
}
</script>

<style lang="scss" scoped></style>
