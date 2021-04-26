<template>
	<van-search
		v-model="value"
		shape="round"
		:background="searchColor"
		placeholder="请输入搜索关键词"
		@search="searchValue"
	/>
</template>

<script>
import { ref } from 'vue'

export default {
	props: {
		searchColor: {
			type: String,
			default: '#4fc08d',
		},
	},
	emits: ['searchValue'],
	setup(props, { emit }) {
		const value = ref('')
		const searchValue = () => {
			emit('searchValue', value.value)
		}
		return {
			value,
			searchValue,
		}
	},
}
</script>

<style lang="sass" scoped></style>
