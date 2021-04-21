<template>
	<div class="container">
		<slot name="title">
			<!-- <div class="title">热门搜索数组</div> -->
		</slot>
		<div class="box">
			<div
				class="item"
				v-for="(item, index) of HotKeyword"
				:key="index"
				@click="seacrhItem(item.keyword)"
			>
				<div :class="{ isHot: item.is_hot, cont }">{{ item.keyword }}</div>
			</div>
			<div
				class="item"
				v-for="(item, index) of HistoryKeyword"
				:key="index"
				@click="seacrhItem(item)"
			>
				<!-- <div :class="{ isHot: item.is_hot, cont }">{{ item.keyword }}</div> -->
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
export default {
	name: 'App',
	props: {
		HistoryKeyword: {
			type: Array,
		},
		HotKeyword: {
			type: Array,
		},
	},
	setup(prop, { emit }) {
		const data = reactive({})
		const refData = toRefs(data)
		const seacrhItem = (item) => {
			emit('seacrhItem', item)
		}
		return {
			...refData,
			seacrhItem,
		}
	},
}
</script>

<style lang="scss" scoped>
.container {
	border: solid 1px #eee;
	border-radius: 10px;
	text-align: left;
	font-size: 14px;
	margin: 5px;
	.box {
		margin: 5px 2px;
		display: flex;
		flex-wrap: wrap;
		.item {
			text-align: center;
			border: solid 1px #eee;
			margin: 0 5px 10px;
			width: 21%;
			height: 30px;
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
			.isHot {
				color: #eee;
				background-color: rgb(135, 27, 27);
			}
		}
	}
}
</style>
