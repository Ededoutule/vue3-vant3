<template>
	<div class="nav-page">
		<!-- <van-row>
			<van-col v-for="(item, index) in navObj" :key="index" :span="24 / navObj.length">
				<NavFooterItem
					:class="{ bgColor: colorIndex == index }"
					:navItem="item"
					@click="ColorChange(index)"
				></NavFooterItem>
			</van-col>
		</van-row> -->
		<div class="nav-item" v-for="(item, index) in navObj" :key="index">
			<NavFooterItem
				:class="{ bgColor: colorIndex == index }"
				:navItem="item"
				@click="ColorChange(index)"
			></NavFooterItem>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'
import NavFooterItem from './NavFooterItem'
export default {
	props: {
		navObj: {
			type: Array,
			defined: [],
		},
	},
	setup() {
		const colorIndex = ref(0)
		const ColorChange = (index) => {
			colorIndex.value = index
		}
		return {
			colorIndex,
			ColorChange,
		}
	},
	components: {
		NavFooterItem,
	},
}
</script>

<style lang="scss" scoped>
.nav-page {
	display: flex;
	position: fixed;
	right: 0;
	left: 0;
	bottom: 0;
	height: 50px;
	width: 100%;
	.nav-item {
		flex: 1;
		border-left: solid 1px #000;
		.bgColor {
			background-color: green;
		}
		&:nth-of-type(1) {
			border-left: none;
		}
	}
}
</style>
