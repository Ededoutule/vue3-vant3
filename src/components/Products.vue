<template>
	<div class="container">
		<img v-lazy="productData.list_pic_url" alt="" class="img" />
		<div class="name">{{ productData.name }}</div>
		<div class="price">{{ productData.retail_price }}</div>
	</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
	name: 'Products',
	props: {
		productData: {
			type: Object,
		},
	},
	setup() {
		const data = reactive({})
		const refData = toRefs(data)
		return {
			...refData,
		}
	},
}
</script>

<style lang="scss" scoped>
.container {
	width: 45%;
	height: 100%;
	background-color: white;
	border-radius: 8%;
	text-align: center;
	margin: 10px 4px 0 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	.img {
		width: 100%;
	}
	.name {
		width: 80%;
		height: 18px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: 5px;
		font-size: 14px;
	}
	.price {
		margin: 5px 0px;
		font-size: 14px;
	}
}
</style>
