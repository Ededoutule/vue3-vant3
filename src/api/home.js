import internal from '@/utils/require.js'

export function getHome() {
	return internal({
		url: '/index/index',
		method: 'get',
	})
}

export function getSearch() {
	return internal({
		url: '/search/index',
		method: 'get',
	})
}

export function getSearchListData(params) {
	return internal({
		url: `/search/helper`,
		method: 'get',
		params: {
			keyword: params,
		},
	})
}
