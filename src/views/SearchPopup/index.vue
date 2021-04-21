<template>
	<div class="Page">
		<van-loading v-if="Object.keys(placeholder).length < 1" size="24px" vertical>
			{{ Object.keys(placeholder).length }}
			加载中... 23123
		</van-loading>
		<div v-else>
			<van-search
				v-model="searchVal"
				show-action
				:placeholder="
					placeholder.defaultKeyword
						? placeholder.defaultKeyword.keyword
						: '请输入搜索关键词'
				"
				@search="onSearch"
				@cancel="onCancel"
				@update:model-value="onUpdata"
			/>
			<!-- 组件1 -->
			<div v-if="showType === 1">
				<HistoryKeywordList
					:HotKeyword="placeholder.hotKeywordList"
					@seacrhItem="seacrhItem"
				>
					<template v-slot:title>
						<div class="title">热门搜索</div>
					</template>
				</HistoryKeywordList>
				<HistoryKeywordList
					:HistoryKeyword="placeholder.historyKeywordList"
					@seacrhItem="seacrhItem"
				>
					<template v-slot:title>
						<div class="title">历史记录</div>
					</template>
				</HistoryKeywordList>
			</div>
			<!-- 组件2 -->

			<SearchTipsList
				v-else-if="showType === 2"
				:searchTipsList="searchTipsList"
			></SearchTipsList>

			<!-- 组件3 -->
			<div v-else></div>
		</div>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { getSearch, getSearchListData } from '@/api/home.js'

import HistoryKeywordList from '@/components/HistoryKeywordList'
import SearchTipsList from '@/components/SearchTipsList'

export default {
	setup() {
		const searchVal = ref('') //搜索框差数
		const searchData = ref({}) // 请求后的数据
		const placeholder = ref({}) //热门和历史搜索数据
		const searchTipsList = ref('') //搜索实时提升的数据
		const router = useRouter()
		const showType = ref(1)

		// watch(searchVal.value, ()=> {

		// })
		onMounted(async () => {
			try {
				let res = await getSearch()
				if (res.status === 200) {
					placeholder.value = res.data.data
				}
			} finally {
				console.log('d')
			}
		})

		const seacrhItem = (item) => {
			console.log(item)
		}
		const onSearch = () => {}
		const onUpdata = async () => {
			let res = await getSearchListData(searchVal.value)
			if (res.status === 200) {
				showType.value = 2
				searchTipsList.value = res.data.data
			}
		}

		const onCancel = () => {
			router.go(-1)
		}
		return {
			searchVal,
			onSearch,
			onCancel,
			searchData,
			placeholder,
			seacrhItem,
			showType,
			onUpdata,
			searchTipsList,
		}
	},
	components: {
		HistoryKeywordList,
		SearchTipsList,
	},
}
</script>

<style lang="scss" scoped>
.Page {
	position: absolute;
	right: 0;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgb(253, 252, 252);
	::v-deep .van-loading {
		top: 40%;
	}
	.title {
		margin: 10px;
	}
}
</style>
