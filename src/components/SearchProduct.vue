<template>
	<div class="container">
		<van-dropdown-menu>
			<van-dropdown-item v-model="value1" :options="option1" />
			<van-dropdown-item
				title="价格"
				v-model="params.order"
				:options="priceOption"
				@change="orderChange"
			/>
			<van-dropdown-item
				v-model="params.categoryId"
				:options="filterCategory"
				@change="categoryChange"
			/>
		</van-dropdown-menu>
		<van-empty description="没有搜索的商品" v-if="productList.length === 0" />
		<van-list
			v-else
			v-model:loading="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad"
			:immediate-check="false"
		>
			<div class="products-box">
				<Products v-for="item in productList" :key="item.id" :productData="item"></Products>
			</div>
		</van-list>
	</div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'

import Products from '@/components/Products'

import { getGoodsList } from '@/api/home'

export default {
	name: 'SearchProbuct',
	props: {
		searchVal: {
			type: String,
		},
	},
	setup(prop) {
		const data = reactive({
			value1: 0,
			productList: [],
			loading: false,
			finished: false,
			filterCategory: [],
		})
		const params = reactive({
			keyword: prop.searchVal,
			page: 1,
			size: 6,
			categoryId: 0,
			order: '',
			sort: 'id',
		})
		const option1 = [
			{ text: '全部商品', value: 0 },
			{ text: '新款商品', value: 1 },
			{ text: '活动商品', value: 2 },
		]
		const priceOption = [
			{ text: '价格由高到低', value: 'desc' },
			{ text: '价格由低到高', value: 'asc' },
		]
		const refData = toRefs(data)

		const orderChange = () => {
			data.filterCategory = []
			data.productList = []
			data.loading = false
			data.finished = false
			params.page = 1
			params.sort = 'price'
			onLoad()
		}
		const categoryChange = () => {
			data.filterCategory = []
			data.productList = []
			data.loading = false
			data.finished = false
			params.page = 1
			onLoad()
		}
		onMounted(() => {
			onLoad()
		})
		const getList = async () => {
			let res = await getGoodsList(params)
			if (res.status === 200) {
				res = res.data.data
				if (data.filterCategory.length === 0) {
					res.filterCategory.forEach((item) => {
						data.filterCategory.push({ text: item.name, value: item.id })
					})
				}
				data.filterCategory.forEach((item) => {
					if (item.checked) {
						params.categoryId = item.id
					}
				})
				res.goodsList.forEach((item) => {
					data.productList.push(item)
				})
				data.loading = false
				if (params.page - 1 >= res.totalPages) {
					data.finished = true
				}
				params.page += 1
			}
		}
		const onLoad = () => {
			getList()
		}

		return {
			...refData,
			option1,
			onLoad,
			// onRefresh,
			priceOption,
			params,
			orderChange,
			categoryChange,
		}
	},
	components: {
		Products,
	},
}
</script>

<style lang="scss" scoped>
.container {
	::v-deep .van-dropdown-menu {
		position: fixed;
		left: 0;
		right: 0;
		z-index: 2;
	}
	::v-deep .van-empty {
		position: relative;
		top: 48px;
	}
	::v-deep .van-list {
		position: relative;
		top: 48px;
		.van-list__finished-text {
			background-color: rgb(208, 201, 201);
		}
	}
	.products-box {
		display: flex;
		flex-wrap: wrap;
	}
}
</style>
