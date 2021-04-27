import internal from '@/utils/require'

export function Login(data) {
	return internal({
		url: '/auth/loginByWeb',
		method: 'post',
		data,
	})
}
